exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'mrosettini0@1und1.de',
          hash: 'sQN4VEJ6',
          username: 'greeman0',
          last_ip: '245.19.225.55',
          last_seen: '2017-12-20 19:17:10'
        },
        {
          id: 2,
          email: 'zbly1@google.com.au',
          hash: '1uguV54i',
          username: 'amusso1',
          last_ip: '172.220.97.78',
          last_seen: '2018-10-17 01:01:00'
        },
        {
          id: 3,
          email: 'dchalder2@mtv.com',
          hash: 'OjIyxxDC',
          username: 'efittall2',
          last_ip: '192.209.219.104',
          last_seen: '2018-10-01 23:41:00'
        },
        {
          id: 4,
          email: 'lharragin3@umn.edu',
          hash: 'ZrCetrCa',
          username: 'cvangeffen3',
          last_ip: '48.252.40.137',
          last_seen: '2017-11-11 19:23:14'
        },
        {
          id: 5,
          email: 'sgrose4@webeden.co.uk',
          hash: 'IE98NMFU',
          username: 'kvane4',
          last_ip: '31.136.163.130',
          last_seen: '2018-08-14 21:31:25'
        },
        {
          id: 6,
          email: 'halen5@hp.com',
          hash: 'BKJiIW26',
          username: 'mmccaughey5',
          last_ip: '250.244.25.249',
          last_seen: '2018-01-29 07:42:38'
        },
        {
          id: 7,
          email: 'rmcsharry6@usda.gov',
          hash: 'BF5OaXzn',
          username: 'smerman6',
          last_ip: '97.76.97.175',
          last_seen: '2018-06-29 19:37:50'
        },
        {
          id: 8,
          email: 'sdyerson7@freewebs.com',
          hash: 'hCvoqeQH',
          username: 'arenault7',
          last_ip: '215.38.29.50',
          last_seen: '2018-05-05 10:32:09'
        },
        {
          id: 9,
          email: 'sgosart8@elpais.com',
          hash: 'KkUzvb90',
          username: 'bkillock8',
          last_ip: '216.55.47.122',
          last_seen: '2018-10-07 21:13:01'
        },
        {
          id: 10,
          email: 'ssacco9@cisco.com',
          hash: 'CCEu6F6x',
          username: 'sgommowe9',
          last_ip: '154.163.49.200',
          last_seen: '2018-05-19 06:04:04'
        }
      ]);
    });
};
