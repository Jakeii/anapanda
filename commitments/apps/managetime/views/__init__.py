from .roles import *
from .kummitments import *
from .tasks import *
from .circles import *

def kummithome(request):
    if request.user.is_authenticated:
        return render(request, 'managetime/home.html')
    else:
        return render(request, 'managetime/home.html')
