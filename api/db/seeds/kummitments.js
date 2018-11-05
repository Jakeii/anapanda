exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kummitments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('kummitments').insert([
        {
          id: 1,
          task: 40,
          kummitor: 5,
          startDate: '2018-01-23 00:53:47',
          endDate: '2018-09-18 16:58:21',
          successActions:
            'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
          nextAction:
            'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
          possibleObstacles: 'Aenean lectus.',
          minutesEstimate: 253,
          energyType:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          scheduledStart: '2018-08-01 03:35:31',
          scheduledEnd: '2018-10-27 12:51:16',
          status: 'nisl duis',
          specific: false,
          achievable: true,
          measurable: true,
          relevant: true,
          timeBound: true,
          healthy:
            'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
          wealthy:
            'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
          wise:
            'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          connected:
            'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
          reflection:
            'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
          needHelp: false,
          problemNeedingHelp: 'odio odio elementum eu interdum eu tincidunt'
        },
        {
          id: 2,
          task: 40,
          kummitor: 5,
          startDate: '2018-02-07 16:39:32',
          endDate: '2018-07-30 16:07:14',
          successActions:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
          nextAction:
            'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
          possibleObstacles:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
          minutesEstimate: 31,
          energyType:
            'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
          scheduledStart: '2018-08-29 19:00:18',
          scheduledEnd: '2018-09-27 14:10:10',
          status: 'eu',
          specific: true,
          achievable: true,
          measurable: true,
          relevant: false,
          timeBound: false,
          healthy:
            'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
          wealthy: 'Etiam faucibus cursus urna. Ut tellus.',
          wise:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
          connected: 'Nulla ut erat id mauris vulputate elementum.',
          reflection: 'Integer non velit.',
          needHelp: true,
          problemNeedingHelp: 'amet cursus'
        },
        {
          id: 3,
          task: 20,
          kummitor: 1,
          startDate: '2018-06-13 06:59:59',
          endDate: '2018-08-15 11:04:56',
          successActions:
            'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
          nextAction:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
          possibleObstacles:
            'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
          minutesEstimate: 156,
          energyType:
            'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
          scheduledStart: '2018-08-29 09:11:04',
          scheduledEnd: '2018-09-16 18:10:41',
          status: 'in',
          specific: false,
          achievable: true,
          measurable: true,
          relevant: false,
          timeBound: false,
          healthy:
            'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
          wealthy:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
          wise: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
          connected:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
          reflection: 'Morbi a ipsum. Integer a nibh.',
          needHelp: true,
          problemNeedingHelp: 'lacinia'
        },
        {
          id: 4,
          task: 37,
          kummitor: 4,
          startDate: '2018-06-04 08:51:49',
          endDate: '2018-09-07 13:02:40',
          successActions:
            'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
          nextAction:
            'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
          possibleObstacles:
            'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
          minutesEstimate: 278,
          energyType: 'Donec vitae nisi.',
          scheduledStart: '2018-08-01 19:22:55',
          scheduledEnd: '2018-10-03 01:24:45',
          status: 'sed justo',
          specific: false,
          achievable: true,
          measurable: false,
          relevant: true,
          timeBound: false,
          healthy:
            'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
          wealthy:
            'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
          wise:
            'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
          connected:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
          reflection:
            'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
          needHelp: false,
          problemNeedingHelp: 'sit'
        },
        {
          id: 5,
          task: 14,
          kummitor: 6,
          startDate: '2018-05-09 20:54:21',
          endDate: '2018-09-02 11:55:22',
          successActions:
            'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
          nextAction:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
          possibleObstacles: 'In congue. Etiam justo.',
          minutesEstimate: 95,
          energyType: 'Nulla ac enim.',
          scheduledStart: '2018-08-23 19:14:48',
          scheduledEnd: '2018-09-16 20:19:39',
          status: 'leo',
          specific: true,
          achievable: false,
          measurable: true,
          relevant: false,
          timeBound: true,
          healthy:
            'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
          wealthy: 'Nunc purus.',
          wise: 'Etiam faucibus cursus urna. Ut tellus.',
          connected:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
          reflection: 'Suspendisse potenti.',
          needHelp: false,
          problemNeedingHelp: 'risus dapibus augue vel accumsan tellus nisi eu'
        },
        {
          id: 6,
          task: 22,
          kummitor: 4,
          startDate: '2018-02-08 14:41:20',
          endDate: '2018-09-30 23:16:10',
          successActions:
            'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
          nextAction:
            'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
          possibleObstacles:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
          minutesEstimate: 140,
          energyType:
            'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
          scheduledStart: '2018-07-10 02:58:11',
          scheduledEnd: '2018-10-20 02:38:50',
          status: 'lorem ipsum',
          specific: false,
          achievable: true,
          measurable: false,
          relevant: false,
          timeBound: true,
          healthy:
            'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
          wealthy: 'Nulla suscipit ligula in lacus.',
          wise:
            'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
          connected: 'Nulla tellus.',
          reflection:
            'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
          needHelp: true,
          problemNeedingHelp: 'vestibulum ante'
        },
        {
          id: 7,
          task: 46,
          kummitor: 3,
          startDate: '2018-03-28 15:35:11',
          endDate: '2018-09-15 19:22:56',
          successActions:
            'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
          nextAction:
            'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
          possibleObstacles:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          minutesEstimate: 212,
          energyType: 'Proin at turpis a pede posuere nonummy.',
          scheduledStart: '2018-08-03 07:25:08',
          scheduledEnd: '2018-10-06 17:57:39',
          status: 'at velit',
          specific: true,
          achievable: true,
          measurable: true,
          relevant: false,
          timeBound: true,
          healthy:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          wealthy:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
          wise: 'Aenean auctor gravida sem.',
          connected:
            'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
          reflection:
            'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
          needHelp: false,
          problemNeedingHelp: 'nulla pede ullamcorper augue a suscipit nulla'
        },
        {
          id: 8,
          task: 5,
          kummitor: 9,
          startDate: '2018-06-03 15:52:30',
          endDate: '2018-07-30 06:40:33',
          successActions:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
          nextAction:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
          possibleObstacles: 'Aenean fermentum.',
          minutesEstimate: 71,
          energyType: 'Sed ante.',
          scheduledStart: '2018-07-23 21:35:28',
          scheduledEnd: '2018-10-17 11:52:12',
          status: 'non pretium',
          specific: true,
          achievable: true,
          measurable: true,
          relevant: false,
          timeBound: true,
          healthy:
            'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
          wealthy: 'Integer ac neque. Duis bibendum.',
          wise: 'Donec quis orci eget orci vehicula condimentum.',
          connected:
            'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          reflection: 'Duis at velit eu est congue elementum.',
          needHelp: true,
          problemNeedingHelp: 'amet sem fusce consequat nulla nisl'
        },
        {
          id: 9,
          task: 24,
          kummitor: 4,
          startDate: '2018-03-12 21:31:43',
          endDate: '2018-07-22 19:10:15',
          successActions:
            'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
          nextAction:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
          possibleObstacles: 'Ut tellus.',
          minutesEstimate: 196,
          energyType:
            'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
          scheduledStart: '2018-08-29 00:59:21',
          scheduledEnd: '2018-10-23 00:37:12',
          status: 'ultrices',
          specific: true,
          achievable: true,
          measurable: true,
          relevant: true,
          timeBound: true,
          healthy: 'Pellentesque viverra pede ac diam.',
          wealthy:
            'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
          wise: 'Suspendisse potenti. Nullam porttitor lacus at turpis.',
          connected:
            'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
          reflection:
            'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          needHelp: false,
          problemNeedingHelp: 'ultricies eu nibh'
        },
        {
          id: 10,
          task: 44,
          kummitor: 10,
          startDate: '2017-11-05 13:36:36',
          endDate: '2018-07-30 05:48:53',
          successActions: 'Aliquam non mauris.',
          nextAction:
            'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
          possibleObstacles:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
          minutesEstimate: 291,
          energyType:
            'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
          scheduledStart: '2018-07-15 08:30:44',
          scheduledEnd: '2018-10-28 05:51:35',
          status: 'in',
          specific: true,
          achievable: false,
          measurable: false,
          relevant: false,
          timeBound: true,
          healthy:
            'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          wealthy:
            'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
          wise:
            'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
          connected: 'Integer ac leo. Pellentesque ultrices mattis odio.',
          reflection:
            'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
          needHelp: true,
          problemNeedingHelp: 'dis'
        },
        {
          id: 11,
          task: 34,
          kummitor: 7,
          startDate: '2017-11-29 16:23:00',
          endDate: '2018-08-09 00:23:43',
          successActions:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
          nextAction:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
          possibleObstacles:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
          minutesEstimate: 163,
          energyType:
            'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
          scheduledStart: '2018-07-23 13:30:25',
          scheduledEnd: '2018-09-19 06:26:59',
          status: 'pede venenatis',
          specific: true,
          achievable: true,
          measurable: true,
          relevant: false,
          timeBound: false,
          healthy: 'Donec dapibus. Duis at velit eu est congue elementum.',
          wealthy: 'Pellentesque at nulla.',
          wise:
            'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
          connected: 'Duis aliquam convallis nunc.',
          reflection:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
          needHelp: false,
          problemNeedingHelp:
            'tortor sollicitudin mi sit amet lobortis sapien sapien non mi'
        },
        {
          id: 12,
          task: 40,
          kummitor: 1,
          startDate: '2018-02-27 12:48:41',
          endDate: '2018-10-31 02:29:52',
          successActions:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
          nextAction:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
          possibleObstacles:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
          minutesEstimate: 120,
          energyType: 'Fusce consequat. Nulla nisl. Nunc nisl.',
          scheduledStart: '2018-08-09 08:20:15',
          scheduledEnd: '2018-10-21 01:00:45',
          status: 'lobortis',
          specific: true,
          achievable: true,
          measurable: false,
          relevant: false,
          timeBound: false,
          healthy:
            'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
          wealthy:
            'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
          wise:
            'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
          connected: 'Sed sagittis.',
          reflection:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
          needHelp: false,
          problemNeedingHelp:
            'nisi at nibh in hac habitasse platea dictumst aliquam augue'
        },
        {
          id: 13,
          task: 39,
          kummitor: 9,
          startDate: '2017-12-14 02:33:43',
          endDate: '2018-07-12 19:57:22',
          successActions:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
          nextAction:
            'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
          possibleObstacles:
            'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          minutesEstimate: 241,
          energyType:
            'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
          scheduledStart: '2018-07-17 14:24:43',
          scheduledEnd: '2018-10-21 15:09:00',
          status: 'ante',
          specific: true,
          achievable: true,
          measurable: false,
          relevant: true,
          timeBound: true,
          healthy:
            'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
          wealthy: 'Integer ac leo. Pellentesque ultrices mattis odio.',
          wise:
            'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
          connected:
            'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
          reflection:
            'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
          needHelp: false,
          problemNeedingHelp:
            'lacinia nisi venenatis tristique fusce congue diam id'
        },
        {
          id: 14,
          task: 4,
          kummitor: 10,
          startDate: '2018-06-30 02:23:11',
          endDate: '2018-07-15 10:15:11',
          successActions:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
          nextAction:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
          possibleObstacles:
            'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          minutesEstimate: 44,
          energyType:
            'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          scheduledStart: '2018-08-01 17:51:58',
          scheduledEnd: '2018-09-09 17:53:16',
          status: 'duis',
          specific: false,
          achievable: true,
          measurable: true,
          relevant: false,
          timeBound: false,
          healthy:
            'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
          wealthy:
            'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          wise:
            'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
          connected:
            'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
          reflection: 'Aliquam erat volutpat.',
          needHelp: false,
          problemNeedingHelp: 'eleifend quam a odio in hac'
        },
        {
          id: 15,
          task: 47,
          kummitor: 7,
          startDate: '2018-06-15 10:11:23',
          endDate: '2018-07-30 10:59:55',
          successActions:
            'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
          nextAction:
            'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
          possibleObstacles:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
          minutesEstimate: 165,
          energyType: 'Suspendisse potenti.',
          scheduledStart: '2018-08-21 08:16:59',
          scheduledEnd: '2018-10-30 18:02:40',
          status: 'in hac',
          specific: false,
          achievable: true,
          measurable: true,
          relevant: true,
          timeBound: true,
          healthy:
            'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
          wealthy:
            'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
          wise:
            'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
          connected:
            'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
          reflection: 'Sed sagittis.',
          needHelp: false,
          problemNeedingHelp: 'quis justo maecenas'
        },
        {
          id: 16,
          task: 30,
          kummitor: 6,
          startDate: '2017-11-26 07:27:30',
          endDate: '2018-08-27 20:07:21',
          successActions:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
          nextAction:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
          possibleObstacles:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
          minutesEstimate: 296,
          energyType:
            'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
          scheduledStart: '2018-07-22 06:04:26',
          scheduledEnd: '2018-11-01 00:59:32',
          status: 'semper interdum',
          specific: false,
          achievable: false,
          measurable: true,
          relevant: true,
          timeBound: false,
          healthy:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
          wealthy: 'In eleifend quam a odio. In hac habitasse platea dictumst.',
          wise:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
          connected:
            'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
          reflection:
            'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
          needHelp: true,
          problemNeedingHelp: 'pede justo eu massa donec'
        },
        {
          id: 17,
          task: 45,
          kummitor: 6,
          startDate: '2018-01-21 15:40:56',
          endDate: '2018-08-31 05:23:28',
          successActions:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
          nextAction:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
          possibleObstacles:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
          minutesEstimate: 19,
          energyType:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
          scheduledStart: '2018-07-23 16:47:47',
          scheduledEnd: '2018-10-22 18:02:41',
          status: 'nascetur ridiculus',
          specific: false,
          achievable: true,
          measurable: true,
          relevant: true,
          timeBound: false,
          healthy:
            'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
          wealthy:
            'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
          wise: 'Morbi porttitor lorem id ligula.',
          connected: 'Maecenas rhoncus aliquam lacus.',
          reflection:
            'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
          needHelp: false,
          problemNeedingHelp: 'in magna bibendum'
        },
        {
          id: 18,
          task: 26,
          kummitor: 2,
          startDate: '2018-04-10 04:12:53',
          endDate: '2018-09-04 11:49:03',
          successActions:
            'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
          nextAction:
            'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
          possibleObstacles:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
          minutesEstimate: 297,
          energyType:
            'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
          scheduledStart: '2018-09-01 05:34:35',
          scheduledEnd: '2018-09-06 06:31:36',
          status: 'interdum in',
          specific: false,
          achievable: false,
          measurable: true,
          relevant: false,
          timeBound: false,
          healthy: 'Curabitur in libero ut massa volutpat convallis.',
          wealthy:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
          wise:
            'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
          connected:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
          reflection:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
          needHelp: false,
          problemNeedingHelp: 'felis donec semper sapien'
        },
        {
          id: 19,
          task: 39,
          kummitor: 8,
          startDate: '2018-01-22 10:08:43',
          endDate: '2018-10-16 21:14:55',
          successActions:
            'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
          nextAction:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
          possibleObstacles:
            'Etiam vel augue. Vestibulum rutrum rutrum neque.',
          minutesEstimate: 17,
          energyType:
            'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
          scheduledStart: '2018-07-27 07:22:25',
          scheduledEnd: '2018-09-04 18:56:07',
          status: 'curae',
          specific: false,
          achievable: false,
          measurable: false,
          relevant: true,
          timeBound: false,
          healthy:
            'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
          wealthy:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
          wise:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
          connected:
            'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
          reflection:
            'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
          needHelp: true,
          problemNeedingHelp: 'aliquam non mauris morbi'
        },
        {
          id: 20,
          task: 41,
          kummitor: 9,
          startDate: '2018-05-07 13:27:16',
          endDate: '2018-08-13 18:51:58',
          successActions:
            'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
          nextAction:
            'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
          possibleObstacles:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
          minutesEstimate: 162,
          energyType:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
          scheduledStart: '2018-08-03 02:04:08',
          scheduledEnd: '2018-10-26 03:56:08',
          status: 'congue',
          specific: true,
          achievable: false,
          measurable: false,
          relevant: false,
          timeBound: true,
          healthy:
            'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
          wealthy:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
          wise:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
          connected: 'Praesent blandit lacinia erat.',
          reflection: 'Vivamus vel nulla eget eros elementum pellentesque.',
          needHelp: true,
          problemNeedingHelp: 'porttitor'
        },
        {
          id: 21,
          task: 50,
          kummitor: 10,
          startDate: '2017-12-26 02:49:58',
          endDate: '2018-07-24 02:13:01',
          successActions:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
          nextAction:
            'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
          possibleObstacles:
            'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
          minutesEstimate: 168,
          energyType:
            'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
          scheduledStart: '2018-07-25 01:09:20',
          scheduledEnd: '2018-10-24 23:58:09',
          status: 'rhoncus',
          specific: true,
          achievable: true,
          measurable: false,
          relevant: true,
          timeBound: false,
          healthy:
            'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
          wealthy:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
          wise:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
          connected:
            'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
          reflection:
            'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
          needHelp: false,
          problemNeedingHelp: 'posuere felis sed lacus morbi sem mauris laoreet'
        },
        {
          id: 22,
          task: 37,
          kummitor: 3,
          startDate: '2018-02-02 07:22:05',
          endDate: '2018-08-01 12:12:31',
          successActions:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
          nextAction:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
          possibleObstacles:
            'Quisque ut erat. Curabitur gravida nisi at nibh.',
          minutesEstimate: 182,
          energyType:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
          scheduledStart: '2018-07-13 17:31:31',
          scheduledEnd: '2018-10-18 00:24:53',
          status: 'commodo',
          specific: true,
          achievable: false,
          measurable: true,
          relevant: false,
          timeBound: false,
          healthy:
            'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
          wealthy: 'In hac habitasse platea dictumst.',
          wise:
            'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
          connected:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
          reflection: 'Praesent lectus.',
          needHelp: false,
          problemNeedingHelp:
            'luctus nec molestie sed justo pellentesque viverra pede ac diam'
        },
        {
          id: 23,
          task: 8,
          kummitor: 9,
          startDate: '2018-06-02 23:26:12',
          endDate: '2018-10-09 05:39:07',
          successActions:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
          nextAction:
            'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          possibleObstacles:
            'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
          minutesEstimate: 181,
          energyType:
            'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
          scheduledStart: '2018-08-12 19:14:01',
          scheduledEnd: '2018-10-02 15:42:44',
          status: 'nisl duis',
          specific: true,
          achievable: false,
          measurable: true,
          relevant: true,
          timeBound: true,
          healthy:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
          wealthy:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
          wise: 'Vivamus vel nulla eget eros elementum pellentesque.',
          connected:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
          reflection:
            'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
          needHelp: true,
          problemNeedingHelp: 'ligula vehicula consequat'
        },
        {
          id: 24,
          task: 7,
          kummitor: 8,
          startDate: '2017-12-30 13:24:40',
          endDate: '2018-10-14 18:34:16',
          successActions:
            'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
          nextAction:
            'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
          possibleObstacles:
            'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
          minutesEstimate: 205,
          energyType:
            'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
          scheduledStart: '2018-07-19 19:45:48',
          scheduledEnd: '2018-09-06 11:58:37',
          status: 'nonummy maecenas',
          specific: true,
          achievable: false,
          measurable: true,
          relevant: false,
          timeBound: false,
          healthy:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
          wealthy: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
          wise:
            'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
          connected:
            'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
          reflection: 'Fusce consequat. Nulla nisl. Nunc nisl.',
          needHelp: true,
          problemNeedingHelp:
            'eu interdum eu tincidunt in leo maecenas pulvinar'
        },
        {
          id: 25,
          task: 43,
          kummitor: 9,
          startDate: '2018-04-21 10:50:54',
          endDate: '2018-08-01 12:12:14',
          successActions:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
          nextAction:
            'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
          possibleObstacles:
            'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
          minutesEstimate: 190,
          energyType:
            'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
          scheduledStart: '2018-08-12 03:32:04',
          scheduledEnd: '2018-10-12 08:14:00',
          status: 'vehicula condimentum',
          specific: true,
          achievable: false,
          measurable: true,
          relevant: true,
          timeBound: false,
          healthy:
            'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
          wealthy: 'Nunc rhoncus dui vel sem.',
          wise:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
          connected:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          reflection:
            'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
          needHelp: false,
          problemNeedingHelp: 'diam vitae quam'
        },
        {
          id: 26,
          task: 32,
          kummitor: 9,
          startDate: '2018-06-28 02:00:26',
          endDate: '2018-09-23 22:19:59',
          successActions: 'In eleifend quam a odio.',
          nextAction:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
          possibleObstacles:
            'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
          minutesEstimate: 85,
          energyType:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
          scheduledStart: '2018-08-26 16:39:18',
          scheduledEnd: '2018-10-25 12:43:18',
          status: 'rutrum nulla',
          specific: false,
          achievable: false,
          measurable: false,
          relevant: false,
          timeBound: true,
          healthy:
            'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
          wealthy:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
          wise:
            'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
          connected:
            'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
          reflection: 'Nunc rhoncus dui vel sem. Sed sagittis.',
          needHelp: true,
          problemNeedingHelp: 'magna at nunc commodo placerat'
        },
        {
          id: 27,
          task: 31,
          kummitor: 5,
          startDate: '2017-11-13 07:57:42',
          endDate: '2018-10-07 06:11:36',
          successActions:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
          nextAction:
            'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
          possibleObstacles:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
          minutesEstimate: 128,
          energyType:
            'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
          scheduledStart: '2018-07-27 08:49:09',
          scheduledEnd: '2018-09-06 04:32:06',
          status: 'ligula',
          specific: false,
          achievable: true,
          measurable: false,
          relevant: false,
          timeBound: false,
          healthy:
            'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
          wealthy:
            'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
          wise: 'Nunc purus.',
          connected:
            'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
          reflection:
            'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
          needHelp: false,
          problemNeedingHelp: 'est et tempus semper est quam pharetra magna ac'
        },
        {
          id: 28,
          task: 42,
          kummitor: 9,
          startDate: '2018-04-24 10:15:27',
          endDate: '2018-08-14 13:22:20',
          successActions: 'Phasellus id sapien in sapien iaculis congue.',
          nextAction:
            'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
          possibleObstacles:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
          minutesEstimate: 216,
          energyType:
            'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
          scheduledStart: '2018-08-05 18:29:40',
          scheduledEnd: '2018-09-04 09:33:17',
          status: 'platea',
          specific: true,
          achievable: true,
          measurable: true,
          relevant: true,
          timeBound: true,
          healthy:
            'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
          wealthy:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
          wise:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
          connected:
            'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
          reflection:
            'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
          needHelp: false,
          problemNeedingHelp: 'quisque ut erat'
        },
        {
          id: 29,
          task: 41,
          kummitor: 2,
          startDate: '2017-11-20 21:26:55',
          endDate: '2018-09-21 01:33:51',
          successActions:
            'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
          nextAction:
            'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
          possibleObstacles:
            'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
          minutesEstimate: 25,
          energyType:
            'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
          scheduledStart: '2018-07-29 15:54:22',
          scheduledEnd: '2018-10-28 03:06:40',
          status: 'non quam',
          specific: true,
          achievable: false,
          measurable: false,
          relevant: true,
          timeBound: true,
          healthy:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
          wealthy: 'Pellentesque viverra pede ac diam.',
          wise:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
          connected:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          reflection: 'Suspendisse potenti. Nullam porttitor lacus at turpis.',
          needHelp: false,
          problemNeedingHelp: 'justo sit amet sapien'
        },
        {
          id: 30,
          task: 13,
          kummitor: 3,
          startDate: '2017-12-19 03:42:17',
          endDate: '2018-09-23 16:44:17',
          successActions:
            'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
          nextAction:
            'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
          possibleObstacles:
            'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
          minutesEstimate: 250,
          energyType: 'Morbi non lectus.',
          scheduledStart: '2018-09-02 10:50:27',
          scheduledEnd: '2018-09-28 14:59:15',
          status: 'odio justo',
          specific: true,
          achievable: true,
          measurable: false,
          relevant: true,
          timeBound: true,
          healthy:
            'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
          wealthy:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
          wise: 'Ut at dolor quis odio consequat varius. Integer ac leo.',
          connected:
            'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
          reflection: 'Suspendisse ornare consequat lectus.',
          needHelp: false,
          problemNeedingHelp: 'donec'
        },
        {
          id: 31,
          task: 27,
          kummitor: 5,
          startDate: '2018-02-01 12:08:11',
          endDate: '2018-08-23 22:09:21',
          successActions:
            'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
          nextAction:
            'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
          possibleObstacles:
            'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
          minutesEstimate: 63,
          energyType:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
          scheduledStart: '2018-07-30 10:11:47',
          scheduledEnd: '2018-09-23 17:10:49',
          status: 'aliquam erat',
          specific: true,
          achievable: true,
          measurable: false,
          relevant: false,
          timeBound: false,
          healthy: 'Duis aliquam convallis nunc.',
          wealthy:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
          wise:
            'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
          connected:
            'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
          reflection:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
          needHelp: true,
          problemNeedingHelp: 'id'
        },
        {
          id: 32,
          task: 7,
          kummitor: 5,
          startDate: '2018-06-19 23:06:29',
          endDate: '2018-09-28 17:01:47',
          successActions:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
          nextAction:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
          possibleObstacles:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
          minutesEstimate: 26,
          energyType:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
          scheduledStart: '2018-08-26 08:22:59',
          scheduledEnd: '2018-10-21 07:58:34',
          status: 'tincidunt nulla',
          specific: false,
          achievable: true,
          measurable: false,
          relevant: false,
          timeBound: false,
          healthy:
            'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
          wealthy:
            'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
          wise:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
          connected:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
          reflection:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
          needHelp: false,
          problemNeedingHelp:
            'ut mauris eget massa tempor convallis nulla neque'
        },
        {
          id: 33,
          task: 1,
          kummitor: 2,
          startDate: '2018-04-10 13:06:57',
          endDate: '2018-09-07 18:53:05',
          successActions:
            'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
          nextAction:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
          possibleObstacles:
            'Ut at dolor quis odio consequat varius. Integer ac leo.',
          minutesEstimate: 5,
          energyType:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
          scheduledStart: '2018-07-17 16:26:57',
          scheduledEnd: '2018-10-17 08:24:24',
          status: 'elit sodales',
          specific: false,
          achievable: false,
          measurable: true,
          relevant: false,
          timeBound: true,
          healthy:
            'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
          wealthy:
            'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
          wise:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
          connected:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
          reflection:
            'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
          needHelp: true,
          problemNeedingHelp:
            'lectus in est risus auctor sed tristique in tempus'
        },
        {
          id: 34,
          task: 33,
          kummitor: 10,
          startDate: '2017-11-27 17:25:31',
          endDate: '2018-08-21 15:30:29',
          successActions:
            'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
          nextAction:
            'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
          possibleObstacles: 'Nulla facilisi.',
          minutesEstimate: 116,
          energyType:
            'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
          scheduledStart: '2018-08-07 03:20:38',
          scheduledEnd: '2018-09-04 17:27:02',
          status: 'volutpat',
          specific: false,
          achievable: false,
          measurable: false,
          relevant: true,
          timeBound: false,
          healthy:
            'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
          wealthy: 'Fusce consequat.',
          wise: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.',
          connected:
            'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
          reflection:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
          needHelp: true,
          problemNeedingHelp:
            'platea dictumst etiam faucibus cursus urna ut tellus nulla'
        },
        {
          id: 35,
          task: 11,
          kummitor: 8,
          startDate: '2018-03-20 11:22:05',
          endDate: '2018-08-15 03:51:43',
          successActions:
            'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
          nextAction:
            'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
          possibleObstacles:
            'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
          minutesEstimate: 202,
          energyType:
            'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
          scheduledStart: '2018-07-28 21:48:42',
          scheduledEnd: '2018-10-07 18:13:12',
          status: 'arcu',
          specific: true,
          achievable: true,
          measurable: false,
          relevant: false,
          timeBound: false,
          healthy:
            'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
          wealthy:
            'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
          wise:
            'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
          connected:
            'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
          reflection:
            'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
          needHelp: true,
          problemNeedingHelp: 'libero convallis eget eleifend luctus ultricies'
        },
        {
          id: 36,
          task: 44,
          kummitor: 10,
          startDate: '2018-01-21 15:48:33',
          endDate: '2018-07-23 16:16:34',
          successActions: 'Quisque ut erat. Curabitur gravida nisi at nibh.',
          nextAction:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
          possibleObstacles:
            'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
          minutesEstimate: 161,
          energyType:
            'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
          scheduledStart: '2018-08-30 10:22:50',
          scheduledEnd: '2018-09-30 22:13:03',
          status: 'libero',
          specific: false,
          achievable: false,
          measurable: false,
          relevant: true,
          timeBound: false,
          healthy:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
          wealthy: 'In hac habitasse platea dictumst.',
          wise:
            'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
          connected:
            'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
          reflection:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
          needHelp: true,
          problemNeedingHelp: 'vitae mattis nibh ligula nec'
        },
        {
          id: 37,
          task: 25,
          kummitor: 6,
          startDate: '2017-12-23 23:37:44',
          endDate: '2018-09-08 05:06:33',
          successActions:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
          nextAction:
            'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
          possibleObstacles:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
          minutesEstimate: 90,
          energyType:
            'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
          scheduledStart: '2018-07-19 06:01:17',
          scheduledEnd: '2018-09-28 21:59:28',
          status: 'faucibus',
          specific: true,
          achievable: true,
          measurable: true,
          relevant: true,
          timeBound: true,
          healthy:
            'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
          wealthy:
            'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
          wise: 'Sed ante.',
          connected: 'Phasellus in felis.',
          reflection:
            'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
          needHelp: true,
          problemNeedingHelp:
            'lobortis ligula sit amet eleifend pede libero quis orci nullam'
        },
        {
          id: 38,
          task: 37,
          kummitor: 5,
          startDate: '2018-01-07 12:16:44',
          endDate: '2018-10-20 20:00:10',
          successActions:
            'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
          nextAction:
            'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
          possibleObstacles:
            'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
          minutesEstimate: 240,
          energyType:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
          scheduledStart: '2018-08-21 06:29:52',
          scheduledEnd: '2018-09-16 05:34:07',
          status: 'justo',
          specific: false,
          achievable: false,
          measurable: true,
          relevant: true,
          timeBound: true,
          healthy:
            'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
          wealthy:
            'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          wise: 'Phasellus sit amet erat.',
          connected:
            'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
          reflection: 'Morbi non quam nec dui luctus rutrum.',
          needHelp: false,
          problemNeedingHelp: 'porttitor'
        },
        {
          id: 39,
          task: 36,
          kummitor: 7,
          startDate: '2018-03-03 03:02:57',
          endDate: '2018-09-17 02:53:58',
          successActions:
            'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
          nextAction: 'Pellentesque ultrices mattis odio.',
          possibleObstacles:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          minutesEstimate: 235,
          energyType: 'Aliquam non mauris. Morbi non lectus.',
          scheduledStart: '2018-09-01 09:26:37',
          scheduledEnd: '2018-10-03 21:38:00',
          status: 'sit',
          specific: false,
          achievable: true,
          measurable: false,
          relevant: true,
          timeBound: false,
          healthy:
            'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
          wealthy:
            'Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
          wise:
            'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
          connected:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
          reflection:
            'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
          needHelp: true,
          problemNeedingHelp: 'consequat nulla'
        },
        {
          id: 40,
          task: 41,
          kummitor: 5,
          startDate: '2018-06-04 10:34:11',
          endDate: '2018-09-04 14:17:45',
          successActions:
            'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
          nextAction:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
          possibleObstacles:
            'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
          minutesEstimate: 46,
          energyType:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
          scheduledStart: '2018-08-09 13:15:35',
          scheduledEnd: '2018-10-13 16:06:13',
          status: 'nulla eget',
          specific: false,
          achievable: false,
          measurable: false,
          relevant: true,
          timeBound: false,
          healthy:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
          wealthy:
            'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
          wise:
            'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
          connected:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
          reflection: 'Maecenas tincidunt lacus at velit.',
          needHelp: false,
          problemNeedingHelp:
            'volutpat eleifend donec ut dolor morbi vel lectus in'
        },
        {
          id: 41,
          task: 6,
          kummitor: 3,
          startDate: '2018-02-15 11:28:55',
          endDate: '2018-08-21 05:47:55',
          successActions:
            'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
          nextAction:
            'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
          possibleObstacles:
            'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
          minutesEstimate: 209,
          energyType:
            'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
          scheduledStart: '2018-08-22 16:09:00',
          scheduledEnd: '2018-10-11 04:26:21',
          status: 'in',
          specific: false,
          achievable: false,
          measurable: false,
          relevant: false,
          timeBound: true,
          healthy:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
          wealthy: 'Cras pellentesque volutpat dui.',
          wise:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
          connected:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
          reflection:
            'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
          needHelp: false,
          problemNeedingHelp:
            'vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem'
        },
        {
          id: 42,
          task: 23,
          kummitor: 10,
          startDate: '2018-06-28 06:35:21',
          endDate: '2018-08-03 00:35:06',
          successActions:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          nextAction:
            'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
          possibleObstacles:
            'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
          minutesEstimate: 273,
          energyType:
            'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
          scheduledStart: '2018-08-22 01:30:56',
          scheduledEnd: '2018-09-08 04:43:52',
          status: 'lacus at',
          specific: false,
          achievable: true,
          measurable: true,
          relevant: true,
          timeBound: true,
          healthy: 'Integer ac leo.',
          wealthy:
            'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
          wise:
            'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
          connected:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
          reflection:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          needHelp: false,
          problemNeedingHelp: 'fermentum'
        },
        {
          id: 43,
          task: 14,
          kummitor: 3,
          startDate: '2018-05-10 07:43:09',
          endDate: '2018-07-16 06:06:26',
          successActions:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
          nextAction:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
          possibleObstacles:
            'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
          minutesEstimate: 211,
          energyType:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
          scheduledStart: '2018-08-06 09:17:14',
          scheduledEnd: '2018-10-02 05:10:25',
          status: 'id',
          specific: false,
          achievable: true,
          measurable: false,
          relevant: false,
          timeBound: true,
          healthy: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          wealthy:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          wise: 'Morbi vel lectus in quam fringilla rhoncus.',
          connected:
            'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
          reflection: 'In blandit ultrices enim.',
          needHelp: true,
          problemNeedingHelp:
            'consectetuer eget rutrum at lorem integer tincidunt ante'
        },
        {
          id: 44,
          task: 37,
          kummitor: 8,
          startDate: '2018-02-24 21:01:48',
          endDate: '2018-07-30 23:31:51',
          successActions: 'Pellentesque ultrices mattis odio.',
          nextAction:
            'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
          possibleObstacles:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
          minutesEstimate: 205,
          energyType:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
          scheduledStart: '2018-08-07 12:53:44',
          scheduledEnd: '2018-10-31 14:00:31',
          status: 'velit',
          specific: false,
          achievable: true,
          measurable: false,
          relevant: false,
          timeBound: true,
          healthy:
            'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
          wealthy:
            'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
          wise:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
          connected:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          reflection:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
          needHelp: true,
          problemNeedingHelp: 'molestie'
        },
        {
          id: 45,
          task: 50,
          kummitor: 1,
          startDate: '2017-11-17 21:07:08',
          endDate: '2018-10-15 11:14:37',
          successActions:
            'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
          nextAction: 'Cras in purus eu magna vulputate luctus.',
          possibleObstacles:
            'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
          minutesEstimate: 200,
          energyType: 'Proin eu mi.',
          scheduledStart: '2018-08-01 07:51:17',
          scheduledEnd: '2018-10-08 10:05:38',
          status: 'parturient montes',
          specific: true,
          achievable: false,
          measurable: true,
          relevant: false,
          timeBound: true,
          healthy:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
          wealthy:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
          wise:
            'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
          connected:
            'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
          reflection: 'Duis aliquam convallis nunc.',
          needHelp: false,
          problemNeedingHelp:
            'enim in tempor turpis nec euismod scelerisque quam turpis adipiscing'
        },
        {
          id: 46,
          task: 16,
          kummitor: 1,
          startDate: '2018-04-23 16:57:05',
          endDate: '2018-08-18 16:02:03',
          successActions:
            'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
          nextAction: 'Suspendisse ornare consequat lectus.',
          possibleObstacles: 'Duis mattis egestas metus.',
          minutesEstimate: 40,
          energyType: 'Morbi vel lectus in quam fringilla rhoncus.',
          scheduledStart: '2018-08-25 11:14:23',
          scheduledEnd: '2018-10-30 11:52:03',
          status: 'phasellus',
          specific: false,
          achievable: false,
          measurable: true,
          relevant: false,
          timeBound: true,
          healthy:
            'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
          wealthy:
            'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
          wise:
            'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
          connected:
            'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
          reflection:
            'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
          needHelp: true,
          problemNeedingHelp: 'condimentum id luctus nec'
        },
        {
          id: 47,
          task: 3,
          kummitor: 5,
          startDate: '2017-11-11 05:53:44',
          endDate: '2018-08-19 16:44:13',
          successActions:
            'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
          nextAction:
            'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
          possibleObstacles:
            'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
          minutesEstimate: 28,
          energyType:
            'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          scheduledStart: '2018-08-14 20:14:04',
          scheduledEnd: '2018-09-16 05:48:23',
          status: 'neque libero',
          specific: false,
          achievable: false,
          measurable: false,
          relevant: false,
          timeBound: true,
          healthy: 'Donec dapibus. Duis at velit eu est congue elementum.',
          wealthy:
            'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
          wise: 'Praesent lectus.',
          connected:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
          reflection:
            'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
          needHelp: true,
          problemNeedingHelp: 'nulla'
        },
        {
          id: 48,
          task: 18,
          kummitor: 8,
          startDate: '2018-01-04 10:23:56',
          endDate: '2018-10-16 02:27:17',
          successActions:
            'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
          nextAction:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
          possibleObstacles: 'Mauris sit amet eros.',
          minutesEstimate: 56,
          energyType: 'Maecenas rhoncus aliquam lacus.',
          scheduledStart: '2018-07-15 07:56:57',
          scheduledEnd: '2018-10-15 18:17:54',
          status: 'nibh',
          specific: true,
          achievable: false,
          measurable: true,
          relevant: false,
          timeBound: false,
          healthy:
            'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
          wealthy: 'Fusce consequat. Nulla nisl. Nunc nisl.',
          wise: 'Suspendisse accumsan tortor quis turpis.',
          connected:
            'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          reflection: 'Aliquam quis turpis eget elit sodales scelerisque.',
          needHelp: true,
          problemNeedingHelp: 'nulla'
        },
        {
          id: 49,
          task: 16,
          kummitor: 8,
          startDate: '2018-06-21 02:06:31',
          endDate: '2018-10-20 08:29:36',
          successActions:
            'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
          nextAction:
            'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
          possibleObstacles:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
          minutesEstimate: 61,
          energyType:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
          scheduledStart: '2018-08-04 16:55:48',
          scheduledEnd: '2018-09-15 02:06:33',
          status: 'id ligula',
          specific: false,
          achievable: true,
          measurable: false,
          relevant: false,
          timeBound: true,
          healthy:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
          wealthy:
            'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
          wise:
            'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
          connected:
            'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
          reflection:
            'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
          needHelp: false,
          problemNeedingHelp:
            'orci mauris lacinia sapien quis libero nullam sit'
        },
        {
          id: 50,
          task: 21,
          kummitor: 7,
          startDate: '2018-06-25 21:02:00',
          endDate: '2018-08-13 17:32:50',
          successActions:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
          nextAction:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
          possibleObstacles:
            'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
          minutesEstimate: 80,
          energyType:
            'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
          scheduledStart: '2018-07-19 13:20:25',
          scheduledEnd: '2018-09-20 07:53:29',
          status: 'ipsum ac',
          specific: true,
          achievable: false,
          measurable: false,
          relevant: true,
          timeBound: false,
          healthy: 'Maecenas pulvinar lobortis est.',
          wealthy:
            'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
          wise:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
          connected:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
          reflection:
            'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
          needHelp: false,
          problemNeedingHelp: 'pellentesque viverra pede ac'
        }
      ]);
    });
};
