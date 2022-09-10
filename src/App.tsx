import { useState } from 'react';
import styles from './App.module.css'
import logo from './assets/powered.png';
import leftImg from './assets/leftarrow.png';
import { GridItem } from './componets/GridItem';

import { levels, calculateImc, Level } from './helpers/imc'

const App = () => {
  const [heightFieal, setHeightFieal] = useState<number>(0)
  const [weightFieal, setWeightFieal] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const calculateButton = () => {
    if (heightFieal && weightFieal) {
      setToShow(calculateImc(heightFieal, weightFieal))
    } else {
      alert('Digite todos os campos')
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setHeightFieal(0)
    setWeightFieal(0)
  }


  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt="" width={150} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para indice de Massa Corpórea, parârametro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa </p>

          <input
            type="number"
            placeholder='Digite a sua altura, Ex: 1.3 (em metros)'
            value={heightFieal > 0 ? heightFieal : ''}
            onChange={e => setHeightFieal(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder='Digite o seu peso, Ex: 70.5 (em kg)'
            value={weightFieal > 0 ? weightFieal : ''}
            onChange={e => setWeightFieal(parseFloat(e.target.value))}

            // adicionado disable para não permitir modificações quando toshow estiver true
            disabled={toShow ? true : false}
          />

          <button onClick={calculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>

        <div className={styles.rightSide}>

          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}></GridItem>
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.arrow} onClick={handleBackButton}>
                <img src={leftImg} alt="30" width={25}/>
              </div>
              <GridItem item={toShow}></GridItem>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App

