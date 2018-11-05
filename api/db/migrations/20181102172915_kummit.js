const idGenerator = `
  CREATE SEQUENCE table_id_seq;
  CREATE OR REPLACE FUNCTION url_safe_base64(to_convert text)
    RETURNS text AS $$
    DECLARE
      result text;
    BEGIN
      result := replace(replace(replace(to_convert, '+', '-'), '/', '_'), '=', '');
      RETURN result;
    END
  $$ LANGUAGE PLPGSQL;
  CREATE OR REPLACE FUNCTION next_id(OUT result_string text) AS $$
    DECLARE
      our_epoch bigint := 1314220021721;
      result bigint;
      seq_id bigint;
      now_millis bigint;
      shard_id int := 0;
    BEGIN
      SELECT nextval('table_id_seq') % 1024 INTO seq_id;
      SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000) INTO now_millis;
      result:= (now_millis - our_epoch) << 23;
      result:= result | (shard_id << 10);
      result:= result | (seq_id);
      result_string:= url_safe_base64(encode(int8send(result), 'base64'));
    END;
  $$ LANGUAGE PLPGSQL;`;

const idGenRemoval = `
  DROP SEQUENCE table_id_seq;
  DROP FUNCTION url_safe_base64;
  DROP FUNCTION next_id;`;

exports.up = knex =>
  knex.schema
    .raw(idGenerator)
    .createTable('users', table => {
      table
        .text('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('next_id()'));
      table
        .text('email')
        .unique()
        .index();
      table
        .text('username')
        .unique()
        .index();
      table.text('hash');
      table.text('last_seen');
      table.text('last_ip');
      table.timestamps();
    })
    .createTable('circles', table => {
      table
        .text('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('next_id()'));
      table.text('name');
      table.text('purpose');

      table.text('superCircle').references('circles');
      table.text('leadLink').references('users');
      table.text('repLink').references('users');
      table.text('secretary').references('users');
      table.text('facilitator').references('users');
      table.text('crossLinks').references('users');

      table.text('strategies');
      table.text('domains');
      table.text('policies');
      table.text('accountabilities');
      table.text('objectives');
      table.text('metrics');
      table.text('birthDate');
      table.text('reports');
      table.timestamps();
    })
    .createTable('clients', table => {
      table
        .text('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('next_id()'));
      table.text('name');
    })
    .createTable('projects', table => {
      table
        .text('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('next_id()'));
      table.text('name');
      table.text('circle').references('circles');
      table.text('client').references('clients');
      // table.text('gigFinding').references('users'); //many
      // table.text('gigDoing').references('users'); //many
      // table.text('gigManagement').references('users'); //many
      table.text('gigValue');
      table.text('gigValueDetails');
      table.text('description');
      table.date('startDate');
      table.date('endDate');
      table.integer('expectedDuration'); // required? can be calculate from start/end date?
      table.text('lead').references('users');
      table.text('manager').references('users');
      table.text('objectives');
      table.text('keyResults');
      table.text('stage');
      table.text('status');
      table.text('weeklyReport');
      table.timestamps();
    })
    .createTable('roles', table => {
      table
        .text('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('next_id()'));
      table.text('name');
      table.text('purpose');
      table.text('domains');
      table.text('accountabilities');
      table.text('circle').references('circles');
      table.text('project').references('projects');
      table.text('birthDate');
      table.text('monthlyReport');
      // table.text('collaborators').references('users'); //many
      // table.text('energizers').references('users'); //many
      table.text('roleStatus');
      table.text('creator').references('users');
      table.text('reports');
    })
    .createTable('tasks', table => {
      table
        .text('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('next_id()'));
      table.text('name');
      table.text('description');
      table.text('doneEvidence');
      table.date('startDate');
      table.date('endDate');
      table.text('project').references('projects');
      table.text('role').references('roles');
      table.text('circle').references('circles');
      table.text('creator').references('users');
    })
    .createTable('kummitments', table => {
      table
        .text('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('next_id()'));
      table.text('task').references('tasks');
      table.text('kummitor').references('users');
      table.text('successActions');
      table.text('nextAction');
      table.text('possibleObstacles');
      table.integer('minutesEstimate');
      table.date('startDate');
      table.date('endDate');
      table.text('energyType');
      table.date('scheduledStart');
      table.date('scheduledEnd');
      table.text('status');
      table.boolean('specific');
      table.boolean('achievable');
      table.boolean('measurable');
      table.boolean('relevant');
      table.boolean('timeBound');
      table.text('healthy');
      table.text('wealthy');
      table.text('wise');
      table.text('connected');
      table.text('reflection');
      table.boolean('needHelp');
      table.text('problemNeedingHelp');
    });

exports.down = knex =>
  knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('clients')
    .dropTableIfExists('circles')
    .dropTableIfExists('roles')
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('kummitments')
    .raw(idGenRemoval);
