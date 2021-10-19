import styles from './Menu.module.css'

import Link from "next/link"

const Menu = ({active, setActive, header, items}:any) => {
    let i = 0
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className={styles.blur}/>
            <div className={styles.content} onClick={(e:any) => e.stopPropagation()}>
                <div className={styles.header}>{header}</div>
                <ul className={styles.list}>
                    {items.map((item:any) =>
                        <li key={i+= 1}>
                            <Link href={item.href}>
                                <a className={styles.item}>{item.value}</a>
                            </Link>
                        </li>
                            )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;