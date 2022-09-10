import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import UpImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
    item: Level
}


export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={UpImage} alt="" width={30} />}
                {item.icon === 'down' && <img src={downImage} alt="" width={30} />}
            </div>

            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg</div>
            }
            
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            <div className={styles.gridInfo}>
                {item.title === 'Magreza' && <h6>Seu imc está entre 0 e 18.5</h6>}
                {item.title === 'Normal' && <h6>Seu imc está entre  18.6 e 24.9</h6>}
                {item.title === 'Sobrepeso' && <h6>Seu imc está entre 25 e 30</h6>}
                {item.title === 'Obesidade' && <h6>Seu imc está acima de 30.1</h6>}
            </div>
        </div>
    )
} 