export const createFormData = (files, data) => {
    const { single = false, multiple = false } = files
    const formData = new FormData()

    if (single) formData.append('picture', single)

    if (multiple) for (const key in multiple) formData.append('video', multiple[key])

    if (data) for (const key in data) formData.append(key, data[key])

    return formData
}
