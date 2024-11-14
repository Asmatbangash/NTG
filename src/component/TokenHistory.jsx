import React, { useContext } from 'react'
import { AllTokenStore } from '../context/TokenStore'

function TokenHistory() {
  let {allTokens} = useContext(AllTokenStore)
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
    {allTokens.map((token) =>(
    <tr>
      <th scope="row">{token.tokenNumber}</th>
      <td>{token.name}</td>
      <td>{token.FatherName}</td>
      <td>{token.createdAt ? new Date(token.createdAt).toLocaleString() : 'N/A'}</td>
    </tr>
    ))}
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