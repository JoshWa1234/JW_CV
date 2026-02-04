import { createRoot } from 'react-dom/client'


const HomePage = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);


createRoot(document.getElementById('home')!).render(
  HomePage
)  