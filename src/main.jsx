import ReactDOM from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet'

import GlobalStyles from './styles/GlobalStyles.js'
import App from './App.jsx'
import theme from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Helmet>
      <link rel="stylesheet" href={theme.default.font} />
    </Helmet>
    <GlobalStyles />
      <App />
  </>,
)
