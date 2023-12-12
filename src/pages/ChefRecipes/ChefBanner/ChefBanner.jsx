

export default function ChefBanner({chef}) {

    const { id, chef_name, chef_picture_url, chef_bio, years_of_experience, likes, chef_recipes } = chef;

    return (
        <div className="bg-white">
            <div className="pt-6 grid grid-cols-6">
                <div className="col-span-4 mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:px-8">
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={chef_picture_url}
                            alt="chef image"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                <div className="col-span-2 mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{chef_name}</h1>
                    </div>
                    <div className="py-10">
                        <div>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{chef_bio}</p>
                            </div>
                        </div>
                        <div className='my-10 space-y-4'>
                            <div className='text-right px-20'>
                                <h2 className='text-5xl font-bold pb-3'>{chef_recipes.length}</h2>
                                <p className='text-gray-500'>Recipes</p>
                            </div>
                            <div className='text-right px-20'>
                                <h2 className='text-5xl font-bold pb-3'>{years_of_experience}</h2>
                                <p className='text-gray-500'>Years of Experience</p>
                            </div>
                            <div className='text-right px-20'>
                                <h2 className='text-5xl font-bold pb-3'>{likes}</h2>
                                <p className='text-gray-500'>Likes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
