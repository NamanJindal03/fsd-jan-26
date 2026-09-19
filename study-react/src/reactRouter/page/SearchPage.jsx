import React from 'react'
import { createSearchParams, useSearchParams, useLocation } from 'react-router-dom'

export default function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(setSearchParams)

    const location = useLocation();
    console.log(location)


    const ourTest = searchParams.get("test")

  return (
    <div className='App'>
        {ourTest ? (
            <p> Your test is <b> {ourTest}</b></p>
        ) : (
            <i>Nothing Selected</i>
        )}


        {["test1", "test2", "test3", "test4"].map((test) => {
            return (
                <p key={test}>
                    <label htmlFor={`id_${test}`}>{test}</label>
                    <input 
                        type='radio'
                        value={test}
                        checked={ourTest === test}
                        onChange={(event) => {
                            setSearchParams(
                                createSearchParams({test: event.target.value})
                            )
                        }}
                    />
                </p>
            )
        })}
    </div>
  )
}
