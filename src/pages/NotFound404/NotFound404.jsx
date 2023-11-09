import img404 from '../../assets/404.png'

export default function NotFound404() {
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <img className='w-1/2 mx-auto mb-10' src={img404} alt="" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-indigo-600 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                </div>
            </main>
        </>
    )
}
