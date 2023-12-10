const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Total number of registered chefs', value: '119 k' },
    { id: 3, name: 'New users annually', value: '46,000' },
]

export default function Stats() {
    return (
        <div className="bg-slate-700 hover:bg-slate-600 shadow-inner rounded-xl my-10 py-24 sm:py-10">
            <div className="mx-auto p-6 lg:p-6 shadow-2xl bg-slate-600 hover:bg-slate-700 w-11/12 rounded-lg">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
