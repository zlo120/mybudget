let dummy_data = [
    {
        date: "13/01/2023",
        transactions : [
            {
                type: "incoming",
                amount: "$122",
                category: "salary"
            },
            {
                type: "incoming",
                amount: "$122",
                category: "salary"
            },
            {
                type: "outgoing",
                amount: "$122",
                category: "salary"
            },
            {
                type: "incoming",
                amount: "$122",
                category: "salary"
            },
            {
                type: "outgoing",
                amount: "$122",
                category: "salary"
            },
            {
                type: "outgoing",
                amount: "$12",
                category: "food"
            },
            {
                type: "incoming",
                amount: "$12",
                category: "food"
            },
            {
                type: "outgoing",
                amount: "$12",
                category: "food"
            },
            {
                type: "outgoing",
                amount: "$12",
                category: "food"
            },
            {
                type: "incoming",
                amount: "$12",
                category: "food"
            },
            {
                type: "outgoing",
                amount: "$12",
                category: "food"
            },
            
        ]
    },
    {
        date: "14/01/2023",
        transactions : [
            {
                type: "incoming",
                amount: "$122",
                category: "salary"
            },
            {
                type: "outgoing",
                amount: "$122",
                category: "salary"
            },
            {
                type: "outgoing",
                amount: "$12",
                category: "food"
            },
            {
                type: "incoming",
                amount: "$12",
                category: "food"
            },
            {
                type: "incoming",
                amount: "$12",
                category: "food"
            },                
        ]
    },
    ,
    {
        date: "22/01/2023",
        transactions : [
            {
                type: "incoming",
                amount: "$122",
                category: "salary"
            },
            {
                type: "outgoing",
                amount: "$122",
                category: "salary"
            },
            {
                type: "incoming",
                amount: "$122",
                category: "salary"
            },
            {
                type: "outgoing",
                amount: "$122",
                category: "salary"
            },
            {
                type: "outgoing",
                amount: "$122",
                category: "salary"
            },
            {
                type: "incoming",
                amount: "$122",
                category: "salary"
            },
            {
                type: "incoming",
                amount: "$12",
                category: "food"
            },
            {
                type: "outgoing",
                amount: "$12",
                category: "food"
            },
            {
                type: "incoming",
                amount: "$12",
                category: "food"
            },  
            {
                type: "incoming",
                amount: "$12",
                category: "food"
            },
            {
                type: "outgoing",
                amount: "$12",
                category: "food"
            },
            {
                type: "outgoing",
                amount: "$12",
                category: "food"
            },              
        ]
    }        
]

const groupData = (data) => {
    let groupedData = [];
    data = JSON.parse(data)
    
    data.forEach(entry => {
        // if there exists an entry inside data that has the same date as a finalData inside groupedData
        groupedData.forEach(finalData => {
            if (entry.date === finalData.date) {
                    finalData.transactions.push(
                        {
                            type : entry.type,
                            amount : entry.amount,
                            category : entry.category
                        }
                    )
                return;
            }
        })

        // if nothing in groupedData has the same date
        console.log(entry)
        groupedData.push({
            date : entry.date,
            transactions: [
                {
                    type : entry.type,
                    amount : entry.amount,
                    category : entry.category
                }
            ]
        })
    });

    console.log(groupedData)

    return groupedData;
}

export default groupData;