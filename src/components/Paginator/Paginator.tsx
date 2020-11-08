import React, { FC, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Paginator.module.scss'
import { RootState } from '../../store/reducers'
import { setPage } from '../../store/action-creators'

const SHOW_COUNT_PAGES = 5
const PER_PAGES = 10

const Paginator: FC = () => {
  const count = useSelector(
    (state: RootState) => state.repositories.entities?.total_count
  )
  const page = useSelector((state: RootState) => state.repositories.page)

  const pages = useMemo(
    () => count && Math.ceil((count > 1000 ? 1000 : count) / PER_PAGES),
    [count]
  )

  const dispatch = useDispatch()

  const activeButtonStyle = (i: number) =>
    i === page
      ? `${styles.numberPageButton} ${styles.numberPageButtonActive}`
      : styles.numberPageButton

  const setPageCallback = (evt: any) =>
    dispatch(setPage(+(evt.target as HTMLButtonElement).id))

  const edgePageTemplate = (edgePage: number, arr: Array<any>) => {
    if (edgePage === 1) {
      arr.push(
        <button id={String(page - 1)} key={page - 1}>
          Предыдущая страница
        </button>
      )
      arr.push(
        <button
          id={String(edgePage)}
          key={String(edgePage)}
          className={styles.numberPageButton}
        >
          {edgePage}
        </button>
      )
      arr.push(<div>...</div>)
    } else {
      arr.push(<div>...</div>)
      arr.push(
        <button
          id={String(edgePage)}
          key={String(edgePage)}
          className={styles.numberPageButton}
        >
          {edgePage}
        </button>
      )
      arr.push(
        <button id={String(page + 1)} key={page + 1}>
          Следующая страница
        </button>
      )
    }
  }

  const renderPagination = (): any => {
    const nums: Array<any> = []
    if (pages) {
      if (pages > 1 && pages < SHOW_COUNT_PAGES) {
        // если элементов 5 то так и выводим
        // TODO доделать
      } else if (pages > 5) {
        // если больше пяти
        let i = 1
        if (page === 1) {
          // если это первая страница то выводим + ...  и последняя
          for (i; i < SHOW_COUNT_PAGES + 1; i++) {
            nums.push(
              <button
                id={String(i)}
                key={String(i)}
                className={activeButtonStyle(i)}
              >
                {i}
              </button>
            )
          }
          edgePageTemplate(pages, nums)
        } else if (page === pages) {
          // если последняя то выводим 1 ... и последние 5
          edgePageTemplate(1, nums)
          for (i = page - SHOW_COUNT_PAGES; i < page + 1; i++) {
            nums.push(
              <button
                id={String(i)}
                key={String(i)}
                className={activeButtonStyle(i)}
              >
                {i}
              </button>
            )
          }
        } else {
          // выводим в виде 1...4 5 6 ... last
          edgePageTemplate(1, nums)
          for (let i = page; i < page + SHOW_COUNT_PAGES; i++) {
            nums.push(
              <button
                id={String(i)}
                key={String(i)}
                className={activeButtonStyle(i)}
              >
                {i}
              </button>
            )
          }
          edgePageTemplate(pages, nums)
        }
      }
      return nums
    }
  }
  return (
    <div className={styles.container} onClick={setPageCallback}>
      {renderPagination()}
    </div>
  )
}

export default Paginator
