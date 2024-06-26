import style from './sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img className={style.cover}src="https://universidadedatecnologia.com.br/wp-content/uploads/2017/12/Principais-linguagens-2.jpg" alt="" />
      <div className={style.profile} >
        <img className={style.avatar}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHngoawjw14sXHK7Qerdqq_PHl_FTE2_YWA&s" alt="" />
          <strong>Gustavo Montorse</strong>
        <span>Front-end</span>
        
        <footer className={style.repositorio}>
          <a href="https://github.com/gustaS244?tab=repositories">seu repositorio</a>
        </footer>
        
      </div>
    </aside>
  )
}
