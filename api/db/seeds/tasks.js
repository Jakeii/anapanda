exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          name: 'SAP SE',
          description:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          doneEvidence:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
          startDate: '2017-12-24 06:40:09',
          endDate: '2018-10-18 05:01:47',
          creator: 2,
          circle: 9,
          project: 5,
          role: 15
        },
        {
          id: 2,
          name: 'EDAP TMS S.A.',
          description:
            'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
          doneEvidence:
            'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
          startDate: '2018-02-04 02:19:00',
          endDate: '2018-10-20 14:51:19',
          creator: 5,
          circle: 7,
          project: 8,
          role: 5
        },
        {
          id: 3,
          name:
            'WisdomTree Barclays Interest Rate Hedged U.S. Aggregate Bond F',
          description: 'Integer a nibh.',
          doneEvidence:
            'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
          startDate: '2018-02-17 12:11:18',
          endDate: '2018-10-02 18:41:31',
          creator: 1,
          circle: 1,
          project: 1,
          role: 2
        },
        {
          id: 4,
          name: 'China Cord Blood Corporation',
          description:
            'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
          doneEvidence:
            'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          startDate: '2018-04-01 07:45:01',
          endDate: '2018-10-04 18:35:22',
          creator: 8,
          circle: 7,
          project: 2,
          role: 13
        },
        {
          id: 5,
          name: 'Financial Institutions, Inc.',
          description:
            'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
          doneEvidence:
            'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
          startDate: '2017-11-05 18:52:21',
          endDate: '2018-07-12 16:40:52',
          creator: 4,
          circle: 6,
          project: 7,
          role: 17
        },
        {
          id: 6,
          name: 'Peregrine Pharmaceuticals Inc.',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
          doneEvidence:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
          startDate: '2018-03-04 22:20:41',
          endDate: '2018-08-09 15:30:45',
          creator: 6,
          circle: 9,
          project: 12,
          role: 6
        },
        {
          id: 7,
          name: 'CombiMatrix Corporation',
          description:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
          doneEvidence:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
          startDate: '2018-03-14 15:52:15',
          endDate: '2018-08-06 14:28:14',
          creator: 10,
          circle: 6,
          project: 8,
          role: 9
        },
        {
          id: 8,
          name: 'Chevron Corporation',
          description:
            'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          doneEvidence:
            'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
          startDate: '2018-01-24 10:46:06',
          endDate: '2018-07-25 23:43:50',
          creator: 5,
          circle: 8,
          project: 20,
          role: 2
        },
        {
          id: 9,
          name: 'Citizens Community Bancorp, Inc.',
          description:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          doneEvidence:
            'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
          startDate: '2018-06-20 19:32:05',
          endDate: '2018-09-05 12:00:19',
          creator: 1,
          circle: 6,
          project: 18,
          role: 7
        },
        {
          id: 10,
          name: 'Gap, Inc. (The)',
          description:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
          doneEvidence:
            'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
          startDate: '2018-04-20 19:56:46',
          endDate: '2018-09-08 18:24:25',
          creator: 8,
          circle: 4,
          project: 20,
          role: 4
        },
        {
          id: 11,
          name: 'Zimmer Biomet Holdings, Inc.',
          description:
            'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
          doneEvidence:
            'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
          startDate: '2018-06-28 05:45:24',
          endDate: '2018-07-21 10:43:38',
          creator: 4,
          circle: 10,
          project: 20,
          role: 15
        },
        {
          id: 12,
          name: 'Blackrock MuniVest Fund II, Inc.',
          description:
            'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
          doneEvidence:
            'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
          startDate: '2017-12-05 12:48:06',
          endDate: '2018-07-13 20:29:11',
          creator: 7,
          circle: 1,
          project: 10,
          role: 14
        },
        {
          id: 13,
          name: 'Cummins Inc.',
          description:
            'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
          doneEvidence:
            'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          startDate: '2017-12-25 16:31:43',
          endDate: '2018-09-03 06:32:17',
          creator: 1,
          circle: 1,
          project: 13,
          role: 6
        },
        {
          id: 14,
          name: 'Mechel PAO',
          description: 'Nullam varius.',
          doneEvidence:
            'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
          startDate: '2017-11-18 13:13:12',
          endDate: '2018-07-25 07:59:13',
          creator: 7,
          circle: 3,
          project: 10,
          role: 15
        },
        {
          id: 15,
          name: 'GlycoMimetics, Inc.',
          description:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
          doneEvidence:
            'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
          startDate: '2017-12-30 21:23:57',
          endDate: '2018-10-08 03:20:49',
          creator: 4,
          circle: 4,
          project: 20,
          role: 12
        },
        {
          id: 16,
          name: 'Neustar, Inc.',
          description:
            'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
          doneEvidence:
            'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
          startDate: '2018-02-11 20:54:15',
          endDate: '2018-08-11 06:04:56',
          creator: 1,
          circle: 8,
          project: 16,
          role: 12
        },
        {
          id: 17,
          name: 'Apple Hospitality REIT, Inc.',
          description:
            'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
          doneEvidence:
            'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
          startDate: '2018-06-02 08:16:01',
          endDate: '2018-10-12 05:43:39',
          creator: 8,
          circle: 5,
          project: 9,
          role: 18
        },
        {
          id: 18,
          name: 'Adverum Biotechnologies, Inc.',
          description:
            'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
          doneEvidence:
            'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
          startDate: '2018-02-06 00:26:22',
          endDate: '2018-08-25 22:53:30',
          creator: 5,
          circle: 6,
          project: 9,
          role: 12
        },
        {
          id: 19,
          name: 'Digital Realty Trust, Inc.',
          description:
            'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
          doneEvidence:
            'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
          startDate: '2017-12-22 06:20:19',
          endDate: '2018-10-20 15:59:47',
          creator: 1,
          circle: 1,
          project: 16,
          role: 10
        },
        {
          id: 20,
          name: 'Lehman ABS Corporation',
          description:
            'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
          doneEvidence:
            'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
          startDate: '2018-01-15 01:20:12',
          endDate: '2018-09-15 02:55:22',
          creator: 5,
          circle: 8,
          project: 5,
          role: 3
        },
        {
          id: 21,
          name: 'PIMCO Dynamic Income Fund',
          description:
            'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
          doneEvidence:
            'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
          startDate: '2018-05-02 14:56:01',
          endDate: '2018-08-30 08:33:13',
          creator: 4,
          circle: 1,
          project: 19,
          role: 8
        },
        {
          id: 22,
          name: 'DDR Corp.',
          description:
            'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
          doneEvidence:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
          startDate: '2018-06-25 20:11:34',
          endDate: '2018-09-05 16:55:08',
          creator: 7,
          circle: 6,
          project: 20,
          role: 13
        },
        {
          id: 23,
          name: 'SLM Corporation',
          description:
            'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
          doneEvidence:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
          startDate: '2018-06-07 19:13:20',
          endDate: '2018-07-12 22:28:46',
          creator: 6,
          circle: 6,
          project: 4,
          role: 8
        },
        {
          id: 24,
          name: 'Citigroup Inc.',
          description:
            'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
          doneEvidence:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
          startDate: '2018-06-21 16:35:44',
          endDate: '2018-08-28 11:02:59',
          creator: 10,
          circle: 10,
          project: 4,
          role: 18
        },
        {
          id: 25,
          name: 'CNOOC Limited',
          description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
          doneEvidence:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
          startDate: '2018-06-17 12:36:35',
          endDate: '2018-10-03 00:31:59',
          creator: 4,
          circle: 1,
          project: 9,
          role: 15
        },
        {
          id: 26,
          name: 'Intelsat S.A.',
          description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
          doneEvidence:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
          startDate: '2018-05-11 11:16:02',
          endDate: '2018-07-23 06:51:12',
          creator: 10,
          circle: 5,
          project: 5,
          role: 5
        },
        {
          id: 27,
          name: 'Voya Infrastructure, Industrials and Materials Fund',
          description:
            'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
          doneEvidence:
            'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
          startDate: '2018-03-22 13:59:26',
          endDate: '2018-08-21 05:46:04',
          creator: 4,
          circle: 7,
          project: 19,
          role: 10
        },
        {
          id: 28,
          name: 'Steel Partners Holdings LP',
          description:
            'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
          doneEvidence:
            'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
          startDate: '2018-02-16 05:48:54',
          endDate: '2018-07-16 21:37:48',
          creator: 1,
          circle: 4,
          project: 4,
          role: 5
        },
        {
          id: 29,
          name: 'Saratoga Investment Corp',
          description:
            'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
          doneEvidence:
            'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
          startDate: '2017-11-13 04:25:11',
          endDate: '2018-08-24 00:53:00',
          creator: 1,
          circle: 8,
          project: 4,
          role: 6
        },
        {
          id: 30,
          name: 'BioCryst Pharmaceuticals, Inc.',
          description:
            'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
          doneEvidence:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
          startDate: '2018-05-22 21:46:26',
          endDate: '2018-07-16 00:52:56',
          creator: 7,
          circle: 6,
          project: 2,
          role: 3
        },
        {
          id: 31,
          name: 'Constellium N.V.',
          description: 'Nulla nisl.',
          doneEvidence:
            'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
          startDate: '2018-03-19 06:34:52',
          endDate: '2018-08-17 01:18:28',
          creator: 1,
          circle: 9,
          project: 18,
          role: 10
        },
        {
          id: 32,
          name: 'Banco De Chile',
          description: 'Donec vitae nisi.',
          doneEvidence:
            'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
          startDate: '2018-02-07 05:59:11',
          endDate: '2018-09-19 03:19:57',
          creator: 8,
          circle: 1,
          project: 3,
          role: 6
        },
        {
          id: 33,
          name: 'CalAtlantic Group, Inc.',
          description:
            'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
          doneEvidence: 'Nulla tempus.',
          startDate: '2018-05-14 06:26:38',
          endDate: '2018-10-21 09:23:59',
          creator: 9,
          circle: 4,
          project: 19,
          role: 7
        },
        {
          id: 34,
          name: 'Pangaea Logistics Solutions Ltd.',
          description:
            'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
          doneEvidence:
            'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
          startDate: '2018-06-01 10:02:44',
          endDate: '2018-10-30 17:47:29',
          creator: 2,
          circle: 10,
          project: 17,
          role: 8
        },
        {
          id: 35,
          name: 'U.S. Bancorp',
          description:
            'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
          doneEvidence:
            'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
          startDate: '2018-03-08 00:11:44',
          endDate: '2018-10-31 03:53:20',
          creator: 10,
          circle: 5,
          project: 9,
          role: 9
        },
        {
          id: 36,
          name: 'Origo Acquisition Corporation',
          description:
            'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
          doneEvidence:
            'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
          startDate: '2018-07-04 03:08:39',
          endDate: '2018-09-04 15:00:08',
          creator: 7,
          circle: 3,
          project: 14,
          role: 18
        },
        {
          id: 37,
          name: 'JMP Group LLC',
          description:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
          doneEvidence:
            'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
          startDate: '2018-07-05 00:07:25',
          endDate: '2018-10-16 15:53:37',
          creator: 7,
          circle: 4,
          project: 2,
          role: 17
        },
        {
          id: 38,
          name: 'Apartment Investment and Management Company',
          description:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
          doneEvidence: 'Integer ac neque. Duis bibendum.',
          startDate: '2018-05-02 10:48:13',
          endDate: '2018-10-25 09:38:08',
          creator: 8,
          circle: 7,
          project: 9,
          role: 19
        },
        {
          id: 39,
          name: 'Nuveen Tax-Advantaged Total Return Strategy Fund',
          description:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
          doneEvidence:
            'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
          startDate: '2018-05-29 04:06:27',
          endDate: '2018-10-16 04:09:14',
          creator: 4,
          circle: 2,
          project: 20,
          role: 5
        },
        {
          id: 40,
          name: 'Ashford Hospitality Trust Inc',
          description: 'Duis bibendum.',
          doneEvidence:
            'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
          startDate: '2018-06-05 22:38:47',
          endDate: '2018-08-27 16:23:31',
          creator: 2,
          circle: 1,
          project: 16,
          role: 8
        },
        {
          id: 41,
          name: 'AGNC Investment Corp.',
          description:
            'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
          doneEvidence:
            'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
          startDate: '2018-07-07 14:19:08',
          endDate: '2018-08-20 23:08:50',
          creator: 4,
          circle: 4,
          project: 14,
          role: 18
        },
        {
          id: 42,
          name: 'Cellectar Biosciences, Inc.',
          description:
            'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
          doneEvidence:
            'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          startDate: '2018-02-28 09:27:14',
          endDate: '2018-10-14 02:31:35',
          creator: 10,
          circle: 9,
          project: 20,
          role: 11
        },
        {
          id: 43,
          name: 'Maiden Holdings, Ltd.',
          description:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
          doneEvidence:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
          startDate: '2018-06-24 12:26:15',
          endDate: '2018-08-05 12:22:52',
          creator: 6,
          circle: 2,
          project: 1,
          role: 15
        },
        {
          id: 44,
          name: 'Cerner Corporation',
          description:
            'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
          doneEvidence:
            'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
          startDate: '2018-03-20 16:17:54',
          endDate: '2018-09-22 03:09:01',
          creator: 10,
          circle: 8,
          project: 14,
          role: 4
        },
        {
          id: 45,
          name: 'Tremor Video, Inc.',
          description:
            'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          doneEvidence: 'Fusce posuere felis sed lacus.',
          startDate: '2018-06-10 06:01:27',
          endDate: '2018-08-15 19:10:29',
          creator: 9,
          circle: 10,
          project: 10,
          role: 12
        },
        {
          id: 46,
          name: 'Boulevard Acquisition Corp. II',
          description:
            'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
          doneEvidence:
            'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
          startDate: '2018-05-25 06:01:23',
          endDate: '2018-09-28 06:56:46',
          creator: 4,
          circle: 7,
          project: 14,
          role: 20
        },
        {
          id: 47,
          name: 'Atlantic American Corporation',
          description:
            'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
          doneEvidence:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
          startDate: '2018-06-10 03:46:47',
          endDate: '2018-08-08 03:50:28',
          creator: 6,
          circle: 5,
          project: 7,
          role: 3
        },
        {
          id: 48,
          name: 'Range Resources Corporation',
          description: 'Proin eu mi. Nulla ac enim.',
          doneEvidence: 'Integer a nibh. In quis justo.',
          startDate: '2018-04-12 14:57:58',
          endDate: '2018-10-31 18:40:02',
          creator: 9,
          circle: 10,
          project: 5,
          role: 17
        },
        {
          id: 49,
          name: 'EDAP TMS S.A.',
          description:
            'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
          doneEvidence:
            'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
          startDate: '2017-11-28 08:54:41',
          endDate: '2018-10-19 18:56:12',
          creator: 2,
          circle: 3,
          project: 3,
          role: 10
        },
        {
          id: 50,
          name: 'Broadwind Energy, Inc.',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
          doneEvidence:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
          startDate: '2018-02-26 17:47:15',
          endDate: '2018-09-26 02:13:15',
          creator: 7,
          circle: 1,
          project: 2,
          role: 13
        }
      ]);
    });
};
