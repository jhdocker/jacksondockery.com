import web

urls = (
	'/', 'Home',
	)

class Parent:
	def __init__(self):
		self.render = web.template.render('templates/')
		data = web.input()

class Home(Parent):
	def GET(self):
		return self.render.home()

if __name__ == '__main__':
	app = web.application(urls, globals())
	app.run()