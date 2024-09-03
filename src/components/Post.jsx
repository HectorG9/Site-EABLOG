import style from './post.module.css'
import './post.module.css'
import Comments from './Comments'

export default function Post() {
  return (

    <article className={style.article}>
      <header>
        <div className={style.post}>
          <img className={style.author} src="https://cdn-icons-png.flaticon.com/512/3076/3076339.png " alt="" />
          <div className={style.authorInfo}>
            <strong>GustaS2</strong>
            <span> Programador/front-end</span>
          </div>
        </div>  
      </header>
      <div className={style.content}>
        <p>Programador front-end</p>
        <p>Olá meu nome e Gustavo Montorse ,sou Desenvolvedor Front-end-junior ,estou em busca de experiencia ,e me adaptar mais a programção.</p>

       <p><a href="https://github.com/gustaS244?tab=repositories">Repositorios</a></p>
        <p><a href="https://github.com/HectorG9/Site-EABLOG">Ultimo Projeto</a></p>
      </div>

      <form action="">
        <strong>8 meses de experiencia Profissional no curso do senai e formando no ensino medio .</strong>
      </form>
      <div>

        <Comments/>

      </div>
    </article>
  )
}
