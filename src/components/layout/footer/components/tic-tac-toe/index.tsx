'use client';

import { useCallback, useEffect, useState } from 'react';

import { Button, Text } from '@/components/ui';

import { Circle, X } from 'lucide-react';

import {
  Player,
  calculateWinner,
  getBotMove,
} from '@/lib/game-logic/tic-tac-toe';
import { cn } from '@/lib/utils';

const TicTacToe = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [playerSymbol, setPlayerSymbol] = useState<'X' | 'O'>('X');
  const [isXNext, setIsXNext] = useState(true);
  const [gamesCount, setGamesCount] = useState(0);

  useEffect(() => {
    const randomSymbol = Math.random() > 0.5 ? 'X' : 'O';
    setPlayerSymbol(randomSymbol);
  }, []);

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((s) => s !== null);
  const isGameOver = !!winner || isDraw;

  const isPlayerTurn =
    (isXNext && playerSymbol === 'X') || (!isXNext && playerSymbol === 'O');

  const makeBotMove = useCallback(() => {
    const botSymbol = playerSymbol === 'X' ? 'O' : 'X';
    const move = getBotMove([...board], gamesCount);

    if (move !== -1) {
      const newBoard = [...board];
      newBoard[move] = botSymbol;
      setBoard(newBoard);
      setIsXNext(botSymbol === 'O');
    }
  }, [board, gamesCount, playerSymbol]);

  useEffect(() => {
    if (!isGameOver && !isPlayerTurn) {
      const isFirstMove = board.every((s) => s === null);
      const delay = isFirstMove ? 0 : 500;

      const timer = setTimeout(makeBotMove, delay);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, isGameOver, makeBotMove, board]);

  const handleClick = (i: number) => {
    if (board[i] || isGameOver || !isPlayerTurn) return;

    const newBoard = [...board];
    newBoard[i] = playerSymbol;
    setBoard(newBoard);
    setIsXNext(playerSymbol === 'O');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGamesCount((prev) => prev + 1);
    setPlayerSymbol(Math.random() > 0.5 ? 'X' : 'O');
  };

  return (
    <div className="relative flex h-full w-full flex-1 flex-col items-center select-none">
      <div
        className={cn(
          'grid grid-cols-3 px-5 py-8 outline-none',
          isGameOver && 'blur-xs',
        )}
      >
        {board.map((square, i) => (
          <Button
            key={i}
            variant="ghost"
            size="icon"
            disabled={!!square || isGameOver || !isPlayerTurn}
            onClick={() => handleClick(i)}
            className={cn(
              'bg-footer disabled:opacity-100',
              i % 3 !== 2 && 'border-muted border-r',
              i < 6 && 'border-muted border-b',
              'outline-none focus-visible:ring-0',
            )}
          >
            {square === 'X' ? (
              <X
                size={24}
                className="text-game-blue"
              />
            ) : square === 'O' ? (
              <Circle
                size={24}
                className="text-contrast"
              />
            ) : (
              <span className="h-6 w-6" />
            )}
          </Button>
        ))}
      </div>

      {isGameOver && (
        <div className="bg-muted/10 absolute flex h-full w-full flex-col items-center justify-center gap-5">
          <Text
            size="base_bold"
            className="text-center"
          >
            {winner
              ? winner === playerSymbol
                ? 'Congrats, you win!'
                : "NAH, I'D WIN."
              : isDraw && "It's a draw!"}
          </Text>
          <Button
            variant="outline"
            size="base"
            onClick={resetGame}
          >
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

export { TicTacToe };
