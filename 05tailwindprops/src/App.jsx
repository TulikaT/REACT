import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = 'holla'
  let newarr = [1,2,3]
  let user = 'okok'
  return (
    <>
      <h1 className='bg-stone-500 text-amber-400 rounded-sm p-4 '> Tailwind Test</h1>
      <figure class="md:flex bg-slate-100 rounded-sm p-8 md:p-0 bg-amber-400 m-12">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="../../public/nature.jpg" alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-red-600 dark:text-red-600">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
<Card username="tailwind" some={obj} someobj={newarr} />




    </>
  )
}

export default App
