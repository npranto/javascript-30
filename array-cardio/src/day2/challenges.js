module.exports = {
    /**
     * Check to see if at least one person within 'people' is 19 years old
     * @param people <Array>
     * @returns <Boolean>
     */
    isAtLeastOnePerson19(people) {
        return people.some((person) => {    // .some() checks to see if at least one element matches the criteria, if so, it return true, else false
            const now = new Date();
            return (now.getFullYear() - person.year) >= 19;
        })
    },

    /**
     * Check to see if everyone is 19 within 'people' 
     * @param people <Array>
     * @returns <Boolean>
     */
    isEveryone19(people) {
        return people.every((person) => {  // .every() checks to see if all the elements matches the criteria, if so, it return true, else false
            const now = new Date();
            return now.getFullYear() - person.year === 19;
        })
    },

    /**
     * Find a comment with a specific id
     * @param comments <Array>
     * @param id <Integer>
     * @returns <Any>
     */
    findCommentWithSpecificId(comments, id) {
        return comments.find((comment) => {     // .find() is similar to filter, but just splits out the very first element that meets the criteria and return it
            return comment.id === id;
        })
    },

    /**
     * Find the index of a comment with a specific id and delete it from the comments
     * @param comments <Array>
     * @param id <Integer>
     * @returns <Integer>
     */
    findIndexOfCommentWithSpecificIdAndDeleteIt(comments, id) {
        let commentIndex = comments.findIndex((comment) => {     
            return comment.id === id;
        })
        commentIndex !== -1 ? comments.splice(commentIndex, 1) : null;
        return comments;
    }
}


