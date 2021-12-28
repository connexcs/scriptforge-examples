function main(vars){
  var cliList = ["1111111","2222222","3333333","4444444"];
  vars.routing.cli = cliList[Math.floor(Math.random() * cliList.length)];
  return vars;
}
