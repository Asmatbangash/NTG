import React from 'react'

function TokenHistory() {
  return (
    <div className='bordered table-responsive'>
    <table class="table table-bordered">
      <caption>List of Tokens</caption>
      <thead>
    <tr>
      <th scope="col">Token NO</th>
      <th scope="col">Name</th>
      <th scope="col">Father Name</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>

  </table>
  </div>
  )
}

export default TokenHistory