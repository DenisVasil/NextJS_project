import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button'
import Image from 'next/image'
import Mountains from "public/mountains.jpg"
import { items } from"./data.js"
import { notFound } from 'next/navigation'

const getData = (cat) =>{
    const data = items[cat]

    if (data){
        return data
    }
    return notFound
}

const Category = ({params}) => {
    // console.log(params)
    const data = getData(params.category)
    return (
        <div>
            <h1 className={styles.catTitlecat}>{params.category}</h1>
            {data.map((item) => (
                  <div className={styles.item} key={item.id}>
                  <div className={styles.content}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.desc}>{item.desc}</p>
                    <Button text="See More" url="#" />
                  </div>
                  <div className={styles.imgContainer}>
                      <Image fill={true} src={Mountains} className={styles.img}/>
                      {/* <Image fill={true} src={item.image} className={styles.img}/> */}

                  </div>
                  </div>
                ))}
          
        </div>
    )
}

export default Category
