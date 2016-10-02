export default function(attrs) {

  function for_in(item) {
    return `<li>${item.name}</li>`;
  }

  return `
    <div id="main">
      <center><h1>Genux: ${attrs.view} Page: Start</h1></center>
      <center><code> // TODO: ... : ......//</code></center>
      <ul>
        ${
          attrs.testList.map(for_in).join('\n')
        }
      </ul>
      <div id="menu"></div>
      <div id="content"></div>
    </div>
  `
}
