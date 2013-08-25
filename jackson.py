import web

urls = (
	'/', 'Home',
	)

class Parent:
	def __init__(self):
		self.render = web.template.render('templates/')
		self.header = self.render.header()
		self.footer = self.render.footer()
		data = web.input()

class Home(Parent):
	def GET(self):
		return self.render.home(self.header, self.footer)

if __name__ == '__main__':
	app = web.application(urls, globals())
	app.run()