import moment from 'moment';

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0 //moment(0)
}, {
  id: '2',
  description: 'Milk',
  note: '',
  amount: 455,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Water',
  note: 'aaaa',
  amount: 295,
  createdAt: moment(0).add(4, 'days').valueOf()
}];