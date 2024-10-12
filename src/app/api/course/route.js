const course = [
    {
        id: 1,
        title: "Modern Web Development",
        duration: "3-4 Month",
        timing: "9-11 AM",
        teacher: "Sir Bilal"
    },
    {
        id: 2,
        title: "Modern App Development",
        duration: "6-8 Month",
        timing: "9-11 AM",
        teacher: "Sir Ghous"
    },
    {
        id: 3,
        title: "Python",
        duration: "6-8 Month",
        timing: "4-6 PM",
        teacher: "Sir Saad"
    },
    {
        id: 4,
        title: "Graphic Designing",
        duration: "1 Year",
        timing: "11-1 PM",
        teacher: "Sir Ali"
    }
]

export async function GET(request) {
    return Response.json({
        course: course,
        msg: "Courses Fetched Successfully"
    })
}