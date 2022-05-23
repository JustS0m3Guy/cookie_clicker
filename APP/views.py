from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Game_data

@login_required
def index(request):
    template='index.html'
    
    context={
        "cookies" : request.user.game_data.cookie_number,
        "grandmas" : request.user.game_data.grandma_number,
        "factories" : request.user.game_data.factory_number,
        "click_upgrade_1" : request.user.game_data.click_upgrade_1,
        "click_upgrade_1" : request.user.game_data.click_upgrade_2,
        "click_upgrade_1" : request.user.game_data.click_upgrade_3,
        "click_upgrade_1" : request.user.game_data.click_upgrade_4,
        "level" : request.user.game_data.level,
    }
    return render(request, template, context)