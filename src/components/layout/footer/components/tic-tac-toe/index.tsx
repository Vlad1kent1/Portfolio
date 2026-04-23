'use client';

import { useCallback, useEffect, useState } from 'react';

import { Circle, X } from 'lucide-react';

import { Button, Text } from '@/components/ui';
import {
  Player,
  calculateWinner,
  findBestMove,
} from '@/lib/game-logic/tic-tac-toe';
import { cn } from '@/lib/utils';

const TicTacToe = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isBotThinking, setIsBotThinking] = useState(false);

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((s) => s !== null);
  const isGameOver = !!winner || isDraw;

  const makeBotMove = useCallback(() => {
    const bestMove = findBestMove([...board]);
    if (bestMove !== -1) {
      const newBoard = [...board];
      newBoard[bestMove] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
      setIsBotThinking(false);
    }
  }, [board]);

  useEffect(() => {
    if (!isXNext && !isGameOver) {
      setIsBotThinking(true);
      const timer = setTimeout(makeBotMove, 600);
      return () => clearTimeout(timer);
    }
  }, [isXNext, isGameOver, makeBotMove]);

  function handleClick(i: number) {
    if (board[i] || isGameOver || !isXNext || isBotThinking) return;

    const newBoard = [...board];
    newBoard[i] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setIsBotThinking(false);
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center select-none">
      <div className="grid grid-cols-3 px-5 py-8 outline-none">
        {board.map((square, i) => (
          <Button
            key={i}
            variant="ghost"
            size="icon"
            disabled={!!square || !!winner || !isXNext}
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
        <div className="bg-muted/20 absolute flex h-full w-full flex-col items-center justify-center gap-5">
          <Text
            size="base_bold"
            className="text-center"
          >
            {winner
              ? `Winner: ${winner}`
              : isDraw
                ? "It's a draw!"
                : 'Your turn!'}
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
