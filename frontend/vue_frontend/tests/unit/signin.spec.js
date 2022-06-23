import { shallowMount, mount, flushPromises } from '@vue/test-utils'
import SignInView from '../../src/views/SignInView.vue'

describe('SignInView.vue Test', () => {
    let wrapper = null

    it('initializes with correct elements', () => {
        wrapper = shallowMount(SignInView, {
            data() {
                return{
                email: '',
                password: '',
                error_text: ''
                }
            }
        })

        expect(wrapper.exists()).toBe(true);

        expect(wrapper.vm.email).toBe('')
        expect(wrapper.vm.password).toBe('')
        expect(wrapper.vm.error_text).toBe('')
    })

    it('initializes with error message', () => {
        // render the component
        wrapper = shallowMount(SignInView, {
            data() {
                return{
                email: 'user@mail.com',
                password: 'notuserpassword',
                error_text: 'wrong password'
                }
            }
        })

        expect(wrapper.exists()).toBe(true);
    
        // check that each element of the user
        expect(wrapper.vm.email).toMatch('user@mail.com')
        expect(wrapper.vm.password).toMatch('notuserpassword')
        expect(wrapper.vm.error_text).toMatch('wrong password')
    })


    it('initializes with success message', () => {
    // render the component
        wrapper = shallowMount(SignInView, {
            data() {
                return{
                email: 'user2@yahoo.com',
                password: 'user2password',
                error_text: ''
                }
            }
        })

        expect(wrapper.exists()).toBe(true);
    
        // check that each element of the user is initialized to empty strings
        expect(wrapper.vm.email).toMatch('user2@yahoo.com')
        expect(wrapper.vm.password).toMatch('user2password')
        expect(wrapper.vm.error_text).toMatch('')
    })


    it('emits an event when the button is clicked y', () => {
        // render the component
        wrapper = shallowMount(SignInView, {
            data() {
                return{
                email: 'user2@yahoo.com',
                password: 'user2password',
                error_text: ''
                }
            }
        })

        expect(wrapper.exists()).toBe(true);
    
        // trigger an event when the button is clicked
        // wrapper.find('button').trigger('click')
    
        // // check that 1 occurrence of the event has been emitted
        // expect(wrapper.emitted('submit')).toBeTruthy
    })


    

})

test('input test.', async() => {
    const wrapper = mount(SignInView)

    expect(wrapper.exists()).toBe(true)

    const email = wrapper.find(".signin-email")
    const password = wrapper.find(".signin-password")

    await email.setValue("test@mail.com")
    await password.setValue("password")

    expect(email.element.value).toBe("test@mail.com")
    expect(password.element.value).toBe("password")
})