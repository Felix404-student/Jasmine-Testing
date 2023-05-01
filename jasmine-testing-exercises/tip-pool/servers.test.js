describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('repeating test should still only have 1 server', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('added td should have name, tip value, and delete button', function () {
    submitServerInfo();

    let td = document.querySelectorAll("td");
    expect(td[0].textContent).toEqual("Alice");
    expect(td[1].textContent).toEqual("$0.00");
    expect(td[2].textContent).toEqual("X");
  });

  it('submitting blank form should not add server', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  afterEach(function() {
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});
