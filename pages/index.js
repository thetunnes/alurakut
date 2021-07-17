
import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'


function ProfileSidebar(props) {
  console.log(props)
  return (
    
    <Box>
      <img src={ `http://github.com/${props.githubUser}.png` } style={{ borderRadius: '8px' }} />
    </Box>
  )
}


export default function Home() {

  const githubUser = 'tunnesvlr';
  const pessoasFavoritas = 
  [
  'juunegreiros',
  'omariosouto',
  'peas',
  'rafaballerini',
  'marcobrunodev',
  'diego3g'
]

  return (

    <>
      <AlurakutMenu />

      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>

          <ProfileSidebar githubUser={githubUser}  />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>

          <Box >
            <h1 className="title">Bem Vindo</h1>

            <OrkutNostalgicIconSet />
          
          </Box>

        </div>
        <div className="comunityArea" style={{ gridArea: 'comunityArea'}}>

          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">Comunidade de Programação ({pessoasFavoritas.length})</h2>
            
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>                  
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>

    </>
  )
}
