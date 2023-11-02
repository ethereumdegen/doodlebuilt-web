
 
import homeImage from '@/assets/images/ensapi_logo.png'
import favicon from '@/assets/images/fire_logo.png'
import punkicon from '@/assets/images/punk1164.png'

const config = {
    title: 'Portfolio - ethereumdegen',
    tagline: '',
    url: 'https://ethereumdegen,com',
    baseURL: '/',
    favicon: favicon,
    punkicon: punkicon,
    homeImage: homeImage,



    navbar: {
        title: '',
        logo: {
          alt: 'Fire Logo',
          src: 'assets/images/fire_logo.png',
        },
        items: [
         
          { to:'/', label:'Home' },
          { to:'/blog', label:'Blog' },
          { to:'https://ethereum-degen-network.mn.co/', label:'Degen Network' },
    
          
        ],
    },

      accountMenu: {


          items: [
            {
              to:'/',
              label: 'Home'
            }


          ]
      },


    footer: {
        style: 'light',
        columns: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Blog',
                to: '/blog/',
              } 
            ],
          },
          {
            title: 'Community',
            items: [
            
              {
                label: 'Twitter',
                href: 'https://twitter.com/ethereumdegen',
              },

              {
                label: 'Degen Network',
                href: 'https://ethereum-degen-network.mn.co/',
              },
            ],
          },
          {
            title: 'More',
            items: [
             
              {
                label: 'GitHub',
                href: 'https://github.com/ethereumdegen/degen-portfolio',
              },

             
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} `,

        socials:{
          twitter:"https://twitter.com/ethereumdegen",
          github:"https://github.com/ethereumdegen/degen-portfolio"
        }
      }
    

}



export default config;
//module.exports = config;
