const { countData, filterData } =  require('./utils');

const args = process.argv.slice(2);

if (!args.length) {
  return console.error('No command provided. You can use "--help" to see the list of commands');
}

switch (true) {
  case args[0].startsWith('--filter='):
    const [, value] = args[0].split('=');
    const filteredData = filterData(value);

    console.log(JSON.stringify(filteredData, null, 2));
    break;

  case args[0].startsWith('--count'):
    const countedData = countData();

    console.log(JSON.stringify(countedData, null, 2));
    break;

  default:
  case args[0].startsWith('help'):
  case args[0].startsWith('--help'):
    console.log('Available commands:');
    console.log('--filter=<value>: Filter the animals by the given value');
    console.log('--count: Count the number of people and animals in each country');
    console.log('--help: Show this help message');
    break;
}
