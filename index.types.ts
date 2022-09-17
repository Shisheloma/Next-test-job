export type specializedSubjectsType = {
    string: string,
    id: string,
    _id: string
}

export type coursesType = {
    title: string,
    _id: string,
    specializedSubjects: Array<specializedSubjectsType>,

}

export type homeProps = {
    courses: Array<coursesType>
}