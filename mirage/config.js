export default function() {
  this.get('/timezones', function() {
    return{
      data: [{
        type: 'timezones',
        id: 1,
        attributes: {
          name: 'Pacific'
        }
      },{
        type: 'timezones',
        id: 2,
        attributes: {
          name: 'Mountain'
        }
      },{
        type: 'timezones',
        id: 3,
        attributes: {
          name: 'Central'
        }
      },{
        type: 'timezones',
        id: 4,
        attributes: {
          name: 'Eastern'
        }
      }]
    };
  });
}
