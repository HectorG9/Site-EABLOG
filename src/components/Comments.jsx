import styles from './comments.module.css'


export default function comments() {
  return (
    <div className={styles.comments}>
      <img 
      src="https://static.vecteezy.com/system/resources/previews/016/389/984/original/business-digital-marketing-free-png.png" 
      alt="" />
      <div>
        <div className={styles.commentsContent}>
          <header className={styles.commentsExperiencias}>
            <div>
              <h1>Experiencias:</h1>
              <strong>Experiencias em HTML, React e Java script, entregador de encomendas, anunciante (marketing), lava a jato, auxiliar de pintor, auxiliar de obras, auxiliar de serralheria, , Mecanica de motocicletas, Montagem e manutenção de computadores .</strong>
            
            </div>
            </header>
        </div>
          <header className={styles.Habilidades}>
            <div>
              <h2>Habilidades:</h2>
            
              <strong>Muito proativo para trabalhos que exigem foco extremo.</strong>
              <h4></h4>
              
          
            </div>
          </header >
          <header className={styles.Qualidades}>
              <h2>Qualidades:</h2>
            <div>
              <strong>Sou uma pessoa sociavel, e que gosta de trabalhar em grupo , posso ter minhas direfenças, porem sempre estou aberto a ideias novas.</strong>
              <p></p>

            </div>
          </header>
      </div>
    </div>
  )
}
