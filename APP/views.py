from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Game_data

@login_required
def index(request):
    template='index.html'
    
    print(request.user.game_data.cookie_number, request.user.game_data.grandma_number, request.user.game_data.factory_number, request.user.game_data.click_upgrade_1, request.user.game_data.click_upgrade_2, request.user.game_data.click_upgrade_3, request.user.game_data.click_upgrade_4, request.user.game_data.level)
    context={
        "cookies" : request.user.game_data.cookie_number,
        "grandmas" : request.user.game_data.grandma_number,
        "factories" : request.user.game_data.factory_number,
        "click_upgrade_1" : request.user.game_data.click_upgrade_1,
        "click_upgrade_2" : request.user.game_data.click_upgrade_2,
        "click_upgrade_3" : request.user.game_data.click_upgrade_3,
        "click_upgrade_4" : request.user.game_data.click_upgrade_4,
        "level" : request.user.game_data.level,
    }


    if request.method=="POST":
        newcookies = request.POST['newcookienumber']
        newgradmas = request.POST['grandmanumber']
        newfactories = request.POST['grandmanumber']
        newcu1 = request.POST['cpsu1']
        newcu2 = request.POST['cpsu2']
        newcu3 = request.POST['cpsu3']
        newcu4 = request.POST['cpsu4']
        newlvl = request.POST['levelnumber']

        gm = Game_data.objects.get()
        updateneeded = 0
        if ((gm.cookie_number != newcookies) or (newcookies != 0) or (newcookies != "")):
            gm.cookie_number = newcookies
            updateneeded += 1

        if ((gm.grandma_number != newgradmas) or (newgradmas != 0) or (newgradmas != "")):
            gm.grandma_number = newgradmas
            updateneeded += 1

        if ((gm.factory_number != newfactories) or (newfactories != 0) or (newfactories != "")):
            gm.factory_number = newfactories
            updateneeded += 1

        if ((gm.click_upgrade_1 != newcu1) or (newcu1 != "")):
            gm.click_upgrade_1 = newcu1
            updateneeded += 1

        if ((gm.click_upgrade_2 != newcu2) or (newcu2 != "")):
            gm.click_upgrade_2 = newcu2
            updateneeded += 1

        if ((gm.click_upgrade_3 != newcu3) or (newcu3 != "")):
            gm.click_upgrade_3 = newcu3
            updateneeded += 1

        if ((gm.click_upgrade_4 != newcu4) or (newcu4 != "")):
            gm.click_upgrade_4 = newcu4
            updateneeded += 1

        if ((gm.level != newlvl) or (newlvl != 0) or (newlvl != "")):
            gm.level = newlvl
            updateneeded += 1

        if (updateneeded > 0):
            gm.save()
        
    return render(request, template, context)