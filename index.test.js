describe('app routes', () => {
    it('return the method', async() => {
        const response = getMethod();

        expect(response).toEqual({
            method: 'GET'
        });
    })
})