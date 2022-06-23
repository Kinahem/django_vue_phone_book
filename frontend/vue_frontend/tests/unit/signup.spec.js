import { shallowMount, mount, flushPromises } from '@vue/test-utils'
import SignUpView from '../../src/views/SignUpView.vue'

describe('SignUpView.vue Test.', () => {

    let wrapper = null

    it('initializes with correct elements', () => {
        wrapper = shallowMount(SignUpView, {
            data() {
                return{
                    email: '',
                    username: '',
                    password: '',
                    full_name: '',
                    birth_date: '',
                    gender: '',
                    errors: '',
                }
            }
        })

        expect(wrapper.exists()).toBe(true);

        expect(wrapper.vm.email).toBe('')
        expect(wrapper.vm.username).toBe('')
        expect(wrapper.vm.password).toBe('')
        expect(wrapper.vm.full_name).toBe('')
        expect(wrapper.vm.birth_date).toBe('')
        expect(wrapper.vm.gender).toBe('')
        expect(wrapper.vm.errors).toBe('')
    })

    it('initializes with error message', () => {
        // render the component
        wrapper = shallowMount(SignUpView, {
            data() {
                return{
                email: 'user@mail.com',
                username: 'user',
                password: 'notuserpassword',
                full_name: 'user',
                birth_date: 'xxxxx',
                gender: 'K',
                errors: 'error1',
                }
            }
        })

        expect(wrapper.exists()).toBe(true);

        // check that each element of the user
        expect(wrapper.vm.email).toBe('user@mail.com')
        expect(wrapper.vm.username).toBe('user')
        expect(wrapper.vm.password).toBe('notuserpassword')
        expect(wrapper.vm.full_name).toBe('user')
        expect(wrapper.vm.birth_date).toBe('xxxxx')
        expect(wrapper.vm.gender).toBe('K')
        expect(wrapper.vm.errors).toBe('error1')
    })


    it('initializes with success message', () => {
    // render the component
    wrapper = shallowMount(SignUpView, {
        data() {
            return{
            email: 'user@mail.com',
            username: 'user',
            password: 'notuserpassword',
            full_name: 'user',
            birth_date: '2005-02-04',
            gender: 'M',
            errors: '',
            }
        }
    })

    expect(wrapper.exists()).toBe(true);

    // check that each element of the user
    expect(wrapper.vm.email).toBe('user@mail.com')
    expect(wrapper.vm.username).toBe('user')
    expect(wrapper.vm.password).toBe('notuserpassword')
    expect(wrapper.vm.full_name).toBe('user')
    expect(wrapper.vm.birth_date).toBe('2005-02-04')
    expect(wrapper.vm.gender).toBe('M')
    expect(wrapper.vm.errors).toBe('')
    })







    test('Registration input test.', async() => {
        const wrapper = mount(SignUpView)

        expect(wrapper.exists()).toBe(true)

        
        const email = wrapper.find('input')
        await email.setValue('test@mail.com')
        expect(email.element.value).toBe('test@mail.com')


        
        const password = wrapper.find('input')
        await password.setValue("password")
        expect(password.element.value).toBe("password")

        const fullname = wrapper.find('input')
        await fullname.setValue("fullname")
        expect(fullname.element.value).toBe("fullname")

        const birthdate = wrapper.find('input')
        await birthdate.setValue("2018-07-22")
        expect(birthdate.element.value).toBe("2018-07-22")

        const gender = wrapper.find('input')
        await gender.setValue("M")
        expect(gender.element.value).toBe("M")


        const username =  wrapper.find('input')
        await username.setValue("username")
        expect(username.element.value).toBe("username")
    })
    


    
})

test('input test.', async() => {
    const wrapper = mount(SignUpView)

    expect(wrapper.exists()).toBe(true)

    const email = wrapper.find(".signup-email")
    const username =  wrapper.find(".signup-username")
    const password = wrapper.find(".signup-password")
    const fullname = wrapper.find(".signup-fullname")
    const birthdate = wrapper.find(".signup-date")

    await email.setValue("test@mail.com")
    await username.setValue("username")
    await password.setValue("password")
    await fullname.setValue("fullname")
    await birthdate.setValue("2018-07-22")

    expect(email.element.value).toBe("test@mail.com")
    expect(username.element.value).toBe("username")
    expect(password.element.value).toBe("password")
    expect(fullname.element.value).toBe("fullname")
    expect(birthdate.element.value).toBe("2018-07-22")
})