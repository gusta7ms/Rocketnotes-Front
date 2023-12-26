class SessionsController {
  async created(request, response){
    const {email, password} = request.body;

    return response.json({email, password})
  }
}

module.exports = SessionsController;
